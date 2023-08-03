import { Button } from "../atoms/Button";

export const HomeTemplate = () => {
  return (
    <div>
      <p>recipes</p>
      {/*<p>by nancy</p>*/}
      <div className="flex justify-center">
        <Button>add recipe</Button>
      </div>
    </div>
  );
};
