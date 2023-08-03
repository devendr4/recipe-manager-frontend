import { FunctionComponent } from "preact";

interface Props {
  title: string;
}

export const Card: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <section class={"border-2 border-pink-500 p-4 backdrop-blur-xl"}>
      {/* <h1>{title}</h1> */}
      {children}
    </section>
  );
};
