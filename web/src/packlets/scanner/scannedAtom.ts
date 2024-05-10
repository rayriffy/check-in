import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

export const scannedAtom = atom<string>("");
export const useScannedAtom = () => useStore(scannedAtom);
