import { useEventAtom } from "$events/eventAtom.ts";
import { EventSelector } from "$events";
import { Form } from "$form";
import { lazy, Suspense } from "react";

const Scanner = lazy(() => import("$scanner"));

const App = () => {
  const event = useEventAtom();

  if (!event) return <EventSelector />;

  return (
    <main className={"relative w-screen h-[100dvh]"}>
      <Suspense fallback={<div />}>
        <Scanner />
      </Suspense>
      <Form />
    </main>
  );
};

export default App;
