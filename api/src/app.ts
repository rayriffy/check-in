import { Elysia } from "elysia";

import { checkinSchema, ticketSchema } from "./models";
import { checkinHandler } from "./handlers/checkinHandler";
import { ticketHandler } from "./handlers/ticketHandler";

export const app = new Elysia({
  prefix: "/event",
})
  .get("/ticket", ({ query }) => ticketHandler(query), {
    query: ticketSchema,
  })
  .post("/checkin", ({ body }) => checkinHandler(body), {
    body: checkinSchema,
  });

export type API = typeof app;
