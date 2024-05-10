import { useStepHandler } from "$form/useStepHandler.ts";
import { Eventpop } from "$eventpop";
import { Step } from "$form/constants.ts";
import { AgodaBadge } from "$agoda/input.tsx";

export const Form = () => {
  const { incompletedSteps, loading, error, complete } = useStepHandler();

  return (
    <div
      className={
        "absolute right-8 top-8 max-w-xs px-6 py-4 bg-white w-full space-y-4 z-[9999]"
      }
    >
      <Eventpop />
      {incompletedSteps[0] === Step.Agoda ? (
        <AgodaBadge />
      ) : loading ? (
        <div
          className={"bg-yellow-500 -mx-6 text-center text-white text-xl py-2"}
        >
          Processing
        </div>
      ) : error ? (
        <div className={"bg-red-500 -mx-6 text-center text-white text-xl py-2"}>
          {error}
        </div>
      ) : complete ? (
        <div
          className={"bg-green-500 -mx-6 text-center text-white text-xl py-2"}
        >
          Completed
        </div>
      ) : null}
    </div>
  );
};
