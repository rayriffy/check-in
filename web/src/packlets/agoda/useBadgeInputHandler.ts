import { useState } from "react";
import { Key } from "$agoda/constants.ts";
import { inputAtom } from "$form/inputAtom.ts";
import { Step } from "$form/constants.ts";

export const useBadgeInputHandler = () => {
  const [lock, setLock] = useState(false);
  const [input, setInput] = useState<string>("");

  const handleInput = (key: Key) => () => {
    if (key === Key.Delete) {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === Key.Confirm) {
      if (input.length !== 0 && Number(input) !== 0) setLock(true);
    } else if (key === Key.Back) {
      setLock(false);
    } else if (key === Key.Submit) {
      inputAtom.setKey(Step.Agoda, input);
    } else if (input.length < 3) {
      setInput((prev) => prev + key);
    }
  };

  return {
    lock,
    input,
    handleInput,
  };
};
