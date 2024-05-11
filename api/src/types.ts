import { TicketStatus } from "./constants";

export interface Ticket {
  ref: string;
  firstname: string;
  lastname: string;
  status: TicketStatus;
}

export interface StamperTicket {
  id: number;
  order_id: number;
  status: TicketStatus;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  reference_code: string;
  ticket_type_id: number;
  kind: "normal";
  price_label: string;
  forms: unknown[];
  forms_pending: null;
  forms_url: string;
  official_id: null;
  main_ticket_id: null;
  add_on_ticket_ids: number[];
  used_at: string;
  created_at: string;
  updated_at: string;
  registered_at: string | null;
}

export interface GetTicketsResponse {
  time: string;
  tickets: StamperTicket[];
}

export interface GetTicketResponse {
  ticket: StamperTicket | null;
}

export interface StampResponse {
  tickets: StamperTicket[];
  failed_messages?: string[];
  used_tickets: StamperTicket[];
}

export interface AgodaBadge {
  label: string;
  badge: string;
}
