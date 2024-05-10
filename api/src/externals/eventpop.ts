import { fetcher } from "../functions/fetcher";
import type {
  GetTicketResponse,
  GetTicketsResponse,
  StampResponse,
} from "../types";

const { EVENTPOP_BASE_URL, EVENTPOP_USERNAME, EVENTPOP_PASSWORD } = process.env;

const authHeader = `Basic ${Buffer.from(EVENTPOP_USERNAME + ":" + EVENTPOP_PASSWORD).toString("base64")}`;

export const stampTicket = async (
  event: string,
  ref: string,
): Promise<StampResponse> =>
  fetcher(`${EVENTPOP_BASE_URL}/events/${event}/tickets/${ref}/stamp`, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
    },
  });

export const unstampTicket = async (
  event: string,
  ref: string,
): Promise<StampResponse> =>
  fetcher(`${EVENTPOP_BASE_URL}/events/${event}/tickets/${ref}/stamp`, {
    method: "DELETE",
    headers: {
      Authorization: authHeader,
    },
  });

export const getTicket = async (
  event: string,
  ref: string,
): Promise<GetTicketResponse> =>
  fetcher(`${EVENTPOP_BASE_URL}/events/${event}/tickets/${ref}`, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });

export const getTickets = async (event: string): Promise<GetTicketsResponse> =>
  fetcher(`${EVENTPOP_BASE_URL}/events/${event}`, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });
