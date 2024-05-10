import { useDeviceList } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";

export const useDevices = () => {
  const [count, setCount] = useState(0);
  const devices = useDeviceList();

  const onChange = (amount = 1) => {
    setCount((p) => p + amount);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      onChange(-1);
    } else if (e.key === "ArrowRight") {
      onChange();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return {
    device: devices[Math.abs(count) % devices.length],
    onChange,
  };
};
