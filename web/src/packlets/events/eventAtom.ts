import { atom } from "nanostores";
import { Event } from "./types";
import { useStore } from "@nanostores/react";

export const eventAtom = atom<Event | null>(null);
export const useEventAtom = () => useStore(eventAtom);
