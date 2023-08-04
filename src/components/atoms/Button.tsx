import { FunctionComponent } from "preact";
import { JSX } from "preact/";

export const Button: FunctionComponent<
  JSX.HTMLAttributes<HTMLButtonElement>
> = ({ children, ...rest }) => {
  return (
    <button class="bg-pink-500 p-2 rounded-md" {...rest}>
      {children}
    </button>
  );
};
