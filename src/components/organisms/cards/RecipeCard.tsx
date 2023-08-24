import { FunctionComponent } from "preact";
import { Card } from "../../molecules/Card";
import { RecipeData } from "../../../types";

export const RecipeCard: FunctionComponent<{ data: RecipeData }> = ({
  data: { img, name, price, category },
}) => {
  const a: any;
  return (
    <Card title={name}>
      <div class="flex gap-2 mt-1 bg-[#1da1f2]">
        <img src={img} height={"150"} width={"150"} alt={"cake"} />
        <aside>
          <p>{name}</p>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
        </aside>
      </div>
    </Card>
  );
};
