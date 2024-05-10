import { events } from "$events/constants.ts";
import { eventAtom } from "$events/eventAtom.ts";

export const EventSelector = () => {
  return (
    <div
      className={
        "w-screen h-[100dvh] flex justify-center items-center text-2xl flex-wrap p-6 gap-6"
      }
    >
      {events.map((event) => (
        <button
          key={event.name}
          onClick={() => eventAtom.set(event)}
          className={
            "rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          }
        >
          {event.name}
        </button>
      ))}
    </div>
  );
};
