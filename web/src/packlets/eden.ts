import { edenTreaty } from "@elysiajs/eden";
import type { API } from "@check-in/api/src";

export const eden = edenTreaty<API>(
  import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://api.rayriffy.com/event",
);
