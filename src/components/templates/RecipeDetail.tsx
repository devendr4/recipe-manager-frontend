import { FunctionComponent } from "preact";
import { RecipeData } from "../../types";

export const RecipeDetailTemplate: FunctionComponent<{
  data: RecipeData;
}> = ({ data }) => {
  return (
    <div class="p-5 sm:p-10 flex flex-col items-center">
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
  );
};
