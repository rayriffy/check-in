import { Scanner as QRScanner } from "@yudiel/react-qr-scanner";
import "./override.css";
import { useDevices } from "$scanner/useDevices.ts";
import { Fragment } from "react";
import { Icon } from "react-iconify-icon-wrapper";
import { scannedAtom } from "$scanner/scannedAtom.ts";

const Scanner = () => {
  const { device, onChange } = useDevices();

  // return (
  //   <button
  //     className={
  //       "w-screen h-[100dvh] bg-pink-500 text-white font-bold text-4xl flex justify-center items-center"
  //     }
  //     onClick={() => scannedAtom.set("MDZ4GG")}
  //   >
  //     Scanner
  //   </button>
  // );

  return (
    <Fragment>
      <div
        className={
          "absolute right-8 bottom-8 bg-white px-6 py-4 z-[99999] text-sm flex space-x-2"
        }
      >
        <button onClick={() => onChange(-1)}>
          <Icon icon={"lucide:arrow-left"} />
        </button>
        <span>{device?.label}</span>
        <button onClick={() => onChange()}>
          <Icon icon={"lucide:arrow-right"} />
        </button>
      </div>
      <QRScanner
        onResult={(res) => scannedAtom.set(res)}
        styles={{
          container: {
            width: "100vw",
            height: "100dvh",
            paddingTop: "unset",
          },
          video: {
            width: "100vw",
            height: "100dvh",
            objectFit: "cover",
          },
        }}
        options={{
          deviceId: device?.deviceId,
          constraints: {
            facingMode: "environment",
            width: { min: 1600, ideal: 1600, max: 1920 },
            height: { min: 900, ideal: 900, max: 1080 },
          },
        }}
      />
    </Fragment>
  );
};

export default Scanner;
