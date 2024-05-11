import { StamperTicket, Ticket } from "../types";

export const ticketMapper = (stamperTicket: StamperTicket): Ticket => ({
  ref: stamperTicket.reference_code,
  firstname: stamperTicket.firstname,
  lastname: stamperTicket.lastname,
  status: stamperTicket.status,
});
