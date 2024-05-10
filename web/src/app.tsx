import { Scanner } from "$scanner";
import { useEventAtom } from "$events/eventAtom.ts";
import { EventSelector } from "$events";
import { Form } from "$form";

const App = () => {
  const event = useEventAtom();

  if (!event) return <EventSelector />;

  return (
    <main className={"relative w-screen h-[100dvh]"}>
      <Scanner />
      <Form />
    </main>
  );
};

export default App;
