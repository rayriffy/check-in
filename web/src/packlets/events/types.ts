import { Step } from "$form/constants.ts";

export interface Event {
  name: string;
  eventpopId: string;
  steps: Step[];
}
