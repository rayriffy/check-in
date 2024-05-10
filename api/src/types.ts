import { TicketStatus } from "./constants";

export interface Ticket {
  ref: string;
  firstname: string;
  lastname: string;
  status: TicketStatus;
}

export interface EventpopTicket {
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
  tickets: EventpopTicket[];
}

export interface GetTicketResponse {
  ticket: EventpopTicket | null;
}

export interface StampResponse {
  tickets: EventpopTicket[];
  failed_messages?: string[];
  used_tickets: EventpopTicket[];
}

export interface AgodaBadge {
  label: string;
  badge: string;
}
