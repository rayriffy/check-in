import { useEffect, useState } from "react";
import { Ticket } from "@check-in/api/src";
import { eden } from "$eden.ts";
import { inputAtom } from "$form/inputAtom.ts";
import { Step } from "$form/constants.ts";

export const useTicket = (event: string, ticket: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Ticket | null>(null);

  useEffect(() => {
    console.log("eventpop:fetch");
    setLoading(true);

    eden.ticket
      .get({
        $query: {
          event,
          ticket,
        },
      })
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
        } else {
          setData(data.ticket);
          if (data.ticket !== null)
            inputAtom.setKey(Step.Eventpop, data.ticket.ref);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [event, ticket]);

  return {
    loading,
    data,
  };
};
