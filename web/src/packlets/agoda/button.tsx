import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";

export const Button: FunctionComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      {...props}
      className={
        "w-16 h-16 mx-auto rounded-full bg-white hover:bg-gray-50 ring-1 ring-inset ring-gray-300 inline-flex items-center justify-center " +
        props.className
      }
    />
  );
};
