import { FunctionComponent } from "preact";
import type { ComponentChildren } from "preact";

export const Button: FunctionComponent<{ children: ComponentChildren }> = ({
  children,
}) => {
  return <button>{children}</button>;
};
