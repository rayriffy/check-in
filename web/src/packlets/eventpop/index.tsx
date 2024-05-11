import { useTicket } from "$eventpop/useTicket.ts";
import { useEventAtom } from "$events/eventAtom.ts";
import { useScannedAtom } from "$scanner/scannedAtom.ts";
import { TicketStatus } from "@check-in/api/src";
import clsx from "clsx";

export const Eventpop = () => {
  const { eventpopId } = useEventAtom()!;
  const scannedValue = useScannedAtom();
  const { loading, data } = useTicket(eventpopId, scannedValue);

  return (
    <div>
      {loading ? (
        <h1 className={"uppercase text-xl font-bold"}>Loading...</h1>
      ) : data === null ? (
        <h1 className={"uppercase text-xl font-bold line-clamp-1"}>
          No ticket found ({scannedValue})
        </h1>
      ) : (
        <div className={"uppercase"}>
          <div className="flex justify-between items-center pb-2">
            <h1 className={"text-xl font-bold"}>#{data.ref}</h1>
            <span
              className={clsx(
                "text-white text-sm py-1 px-2",
                data.status === TicketStatus.Active ? 'bg-green-500' : 'bg-red-500'
              )}
            >{data.status}</span>
          </div>
          <h2 className={"text-3xl line-clamp-1"}>{data.firstname}</h2>
          <h2 className={"text-3xl line-clamp-1"}>{data.lastname}</h2>
        </div>
      )}
    </div>
  );
};
