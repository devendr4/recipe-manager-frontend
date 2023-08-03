import { FunctionComponent } from "preact";
import { RecipeData } from "../../types";
import { BaseTemplate } from "./BaseTemplate";
import {Button} from '../atoms/Button'

export const RecipeDetailTemplate: FunctionComponent<{
  data: RecipeData;
}> = ({ data }) => {
  return (
    <BaseTemplate>
    <div class="flex flex-col items-center">
        <div class="flex w-full justify-between">
      <Button>Back</Button>
      <Button>Edit</Button>
      </div>
      <img src={data.img} height={"300"} width={"300"} alt={"cake"} />
      <h1>{data.name}</h1>
      {/* <p>{data.category}</p> */}
      <p>${data.price}</p>
      <p>Ingredients</p>
      <section class="w-full">
        <div class={"flex justify-between border border-white"}>
          <div class="flex justify-center border-r border-white w-1/3">
            <p>Name</p>
          </div>
          <div class="flex justify-center border-r border-white w-1/3">
            <p>Quantity</p>
          </div>
          <div class="flex justify-center w-1/3">
            <p>Price</p>
          </div>
        </div>
        {data.ingredients?.map(v => (
          <div class={"flex justify-between border border-white"}>
            <div class="flex justify-center border-r border-white w-1/3">
              <p>{v.name}</p>
            </div>
            <div class="flex justify-center border-r border-white w-1/3">
              <p>{v.quantity + v.unit}</p>
            </div>
            <div class="flex justify-center w-1/3">
              <p>${v.price}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
    </BaseTemplate>
  );
};
