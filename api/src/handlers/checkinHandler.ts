import type { Static } from "elysia";

import { checkinSchema } from "../models";
import { stampTicket } from "../externals/eventpop";
import { collections } from "../database/mongo";

export const checkinHandler = async ({
  event,
  ticket,
  metadata,
}: Static<typeof checkinSchema>) => {
  const log = (...args: any[]) => console.log(`ticket:${ticket}>`, ...args);

  try {
    log("checkin:start");

    const stampedTicket = await stampTicket(event, ticket);
    log("eventpop:stamped");

    if (stampedTicket.tickets.length === 0) {
      log("eventpop:already-stamped");
      throw new Error("Already checked in");
    }

    /**
     * Special handler: Agoda external visitor badge
     */
    if (metadata.agoda_badge !== undefined) {
      const existingBadge = await collections.logs.countDocuments({
        event,
        metadata: { agoda_badge: metadata.agoda_badge },
      });

      if (existingBadge > 0) {
        log("agoda:badge-used");
        throw new Error("Badge already used");
      }

      log("agoda:badge-passed");
    }

    await collections.logs.insertOne({
      event,
      ticket: {
        ref: stampedTicket.tickets[0].reference_code,
        firstname: stampedTicket.tickets[0].firstname,
        lastname: stampedTicket.tickets[0].lastname,
      },
      metadata,
      loggedAt: new Date(),
    });
    log("db:logged");

    return { status: "success" };
  } catch (error) {
    log("checkin:failed");

    // await unstampTicket(event, ticket);
    // log("eventpop:unstamped");

    if (error instanceof Error) throw error;
    else throw new Error("Try again later");
  }
};
