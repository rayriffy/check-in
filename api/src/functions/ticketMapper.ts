import { EventpopTicket, Ticket } from "../types";

export const ticketMapper = (eventpopTicket: EventpopTicket): Ticket => ({
  ref: eventpopTicket.reference_code,
  firstname: eventpopTicket.firstname,
  lastname: eventpopTicket.lastname,
  status: eventpopTicket.status,
});
