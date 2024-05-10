import { useEventAtom } from "$events/eventAtom.ts";
import { inputAtom, useInputAtom } from "$form/inputAtom.ts";
import { useEffect, useMemo, useState } from "react";
import { Step } from "$form/constants.ts";
import { eden } from "$eden.ts";

export const useStepHandler = () => {
  const [complete, setComplete] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const event = useEventAtom();
  const input = useInputAtom();

  const incompletedSteps = useMemo<Step[]>(() => {
    if (!event) return [];
    return event.steps.filter((step) => !input[step]);
  }, [event, input]);

  // if eventpop input changes, means new ticket has been scanned. performs reset
  useEffect(() => {
    setComplete(false);
    setError(null);
    inputAtom.setKey(Step.Agoda, undefined);
  }, [event, input[Step.Eventpop]]);

  // if all steps are completed, then fire check-in request to server
  useEffect(() => {
    if (incompletedSteps.length === 0 && event !== null) {
      setLoading(true);

      eden.checkin
        .post({
          event: event.eventpopId,
          ticket: input[Step.Eventpop]!,
          metadata: {
            agoda_badge: input[Step.Agoda],
          },
        })
        .then(({ error, data }) => {
          if (error) {
            console.log(JSON.parse(data!).message);
            setError(JSON.parse(data!).message);
          } else {
            setComplete(true);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [event, incompletedSteps]);

  return {
    incompletedSteps,
    loading,
    complete,
    error,
  };
};
