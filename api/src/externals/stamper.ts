import { fetcher } from "../functions/fetcher";
import type {
  GetTicketResponse,
  GetTicketsResponse,
  StampResponse,
} from "../types";

const { STAMPER_BASE_URL, STAMPER_USERNAME, STAMPER_PASSWORD } = process.env;

const authHeader = `Basic ${Buffer.from(STAMPER_USERNAME + ":" + STAMPER_PASSWORD).toString("base64")}`;

export const stampTicket = async (
  event: string,
  ref: string,
): Promise<StampResponse> =>
  fetcher(`${STAMPER_BASE_URL}/events/${event}/tickets/${ref}/stamp`, {
    method: "PUT",
    headers: {
      Authorization: authHeader,
    },
  });

export const unstampTicket = async (
  event: string,
  ref: string,
): Promise<StampResponse> =>
  fetcher(`${STAMPER_BASE_URL}/events/${event}/tickets/${ref}/stamp`, {
    method: "DELETE",
    headers: {
      Authorization: authHeader,
    },
  });

export const getTicket = async (
  event: string,
  ref: string,
): Promise<GetTicketResponse> =>
  fetcher(`${STAMPER_BASE_URL}/events/${event}/tickets/${ref}`, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });

export const getTickets = async (event: string): Promise<GetTicketsResponse> =>
  fetcher(`${STAMPER_BASE_URL}/events/${event}`, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });
