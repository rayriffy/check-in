# Check-in

Event check-in kiosk for Creatorsgarten events.

Stamper has been hard-coded to only be used in curtain events. Contact project maintainer to request permissions to be used in the other event.

## Configuration

The only file you need to touch is [`$event/constants`](./web/src/packlets/events/constants.ts) in frontend.

```ts
import { Event } from "$events/types.ts";

const event: Event = {
  name: "BKK.JS #20",
  eventpopId: "26956",
  steps: [Step.Eventpop],
};
```

- `name`: Event name
- `eventpopId`: Eventpop event ID
- `steps`: Steps to be shown in the check-in process, by default `Step.Eventpop` is always required.
