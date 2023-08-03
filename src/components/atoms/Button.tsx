import { FunctionComponent } from "preact";
import type { ComponentChildren } from "preact";

export const Button: FunctionComponent<{ children: ComponentChildren }> = ({
  children,
}) => {
  return <button class="bg-pink-500 p-2 rounded-md">{children}</button>;
};
