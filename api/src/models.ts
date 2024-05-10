import { t } from "elysia";

export const ticketSchema = t.Object({
  event: t.String(),
  ticket: t.String(),
});

export const checkinSchema = t.Composite([
  ticketSchema,
  t.Object({
    metadata: t.Object({
      agoda_badge: t.Optional(t.String()),
    }),
  }),
]);
