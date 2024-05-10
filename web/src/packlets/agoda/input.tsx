import { Button } from "$agoda/button.tsx";
import { Icon } from "react-iconify-icon-wrapper";
import { useBadgeInputHandler } from "$agoda/useBadgeInputHandler.ts";
import { Key } from "$agoda/constants.ts";

export const AgodaBadge = () => {
  const { input, handleInput, lock } = useBadgeInputHandler();

  return (
    <div>
      <p className={"text-center"}>Badge number</p>
      <p className={"text-center py-2 text-4xl"}>{input.padStart(3, "0")}</p>
      {lock ? (
        <div>
          <p className={"text-center"}>Confirm?</p>
          <div className="grid grid-cols-2 gap-6 pt-2 px-8">
            <Button onClick={handleInput(Key.Back)}>
              <Icon icon={"lucide:x"} width={"16px"} />
            </Button>
            <Button onClick={handleInput(Key.Submit)}>
              <Icon icon={"lucide:check"} width={"16px"} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 pt-2">
          <Button onClick={handleInput(Key.Number1)}>1</Button>
          <Button onClick={handleInput(Key.Number2)}>2</Button>
          <Button onClick={handleInput(Key.Number3)}>3</Button>
          <Button onClick={handleInput(Key.Number4)}>4</Button>
          <Button onClick={handleInput(Key.Number5)}>5</Button>
          <Button onClick={handleInput(Key.Number6)}>6</Button>
          <Button onClick={handleInput(Key.Number7)}>7</Button>
          <Button onClick={handleInput(Key.Number8)}>8</Button>
          <Button onClick={handleInput(Key.Number9)}>9</Button>
          <Button onClick={handleInput(Key.Delete)}>
            <Icon icon={"lucide:delete"} width={"16px"} />
          </Button>
          <Button onClick={handleInput(Key.Number0)} className={"col-start-2"}>
            0
          </Button>
          <Button onClick={handleInput(Key.Confirm)}>
            <Icon icon={"lucide:arrow-right"} width={"16px"} />
          </Button>
        </div>
      )}
    </div>
  );
};
