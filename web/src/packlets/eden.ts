import { edenTreaty } from "@elysiajs/eden";
import type { API } from "@check-in/api/src";

export const eden = edenTreaty<API>("http://localhost:3000").event;
