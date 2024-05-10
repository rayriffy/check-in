import { useTicket } from "$eventpop/useTicket.ts";
import { useEventAtom } from "$events/eventAtom.ts";
import { useScannedAtom } from "$scanner/scannedAtom.ts";

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
          <div className="flex justify-between">
            <h1 className={"text-xl font-bold pb-2"}>#{data.ref}</h1>
            <span>{data.status}</span>
          </div>
          <h2 className={"text-3xl line-clamp-1"}>{data.firstname}</h2>
          <h2 className={"text-3xl line-clamp-1"}>{data.lastname}</h2>
        </div>
      )}
    </div>
  );
};
