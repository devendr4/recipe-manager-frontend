import { useNavigate } from "react-router-dom";
import { useRootStore } from "../../store";
import { RecipeData } from "../../types";
import { RecipeCard } from "../organisms/cards/RecipeCard";
// import { Card } from "../molecules/Card";

const recipesMockData: RecipeData[] = [
  {
    price: 10,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake",
    category: "cakes",
    ingredients: [
      { name: "Sugar", unit: "g", quantity: 100, price: 1 },
      { name: "Flour", unit: "g", quantity: 200, price: 1 },
    ],
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 2",
    category: "cakes",
    ingredients: [{ name: "Sugar", unit: "g", quantity: 100, price: 1 }],
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 3",
    category: "cakes",
    ingredients: [{ name: "Sugar", unit: "g", quantity: 100, price: 1 }],
  },
  {
    price: 20,
    img: "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
    name: "Cake 4",
    category: "cakes",
    ingredients: [{ name: "Sugar", unit: "g", quantity: 100, price: 1 }],
  },
];

export const RecipesTemplate = () => {
  const selectedRecipe = useRootStore(state => state.selectedRecipe);
  const setRecipe = useRootStore(state => state.setRecipe);
  console.log(selectedRecipe);
  const navigate = useNavigate();
  return (
    <div class="p-5 sm:p-10">
      <h1>recipes</h1>
      <section class={"flex flex-col gap-3"}>
        {recipesMockData.map(v => (
          <div
            onClick={() => {
              navigate("/recipe-detail");
              setRecipe(v);
            }}
          >
            <RecipeCard data={v} />
          </div>
        ))}
      </section>
    </div>
  );
};
