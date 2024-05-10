import { map } from "nanostores";
import { useStore } from "@nanostores/react";

import { FormInput } from "$form/types.ts";

export const inputAtom = map<Partial<FormInput>>();
export const useInputAtom = () => useStore(inputAtom);
