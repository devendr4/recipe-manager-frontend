import { RecipeData } from "../../types";
import { RecipeCard } from "../organisms/cards/RecipeCard";
// import { Card } from "../molecules/Card";

const recipesMockData: RecipeData[] = [
  {
    price: 10,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake",
    category: "cakes",
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 2",
    category: "cakes",
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 2",
    category: "cakes",
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 2",
    category: "cakes",
  },
];

export const RecipesTemplate = () => {
  return (
    <div class="p-5 sm:p-10">
      <h1>recipes</h1>
      <section class={"flex flex-col gap-3"}>
        {recipesMockData.map(v => (
          <RecipeCard data={v} />
        ))}
      </section>
    </div>
  );
};
