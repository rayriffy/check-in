import { Static } from "elysia";
import { ticketSchema } from "../models";
import { getTicket } from "../externals/stamper";
import { ticketMapper } from "../functions/ticketMapper";

export const ticketHandler = async ({
  event,
  ticket,
}: Static<typeof ticketSchema>) =>
  getTicket(event, ticket)
    .then((t) => (t.ticket === null ? null : ticketMapper(t.ticket)))
    .then((t) => ({ ticket: t }));
