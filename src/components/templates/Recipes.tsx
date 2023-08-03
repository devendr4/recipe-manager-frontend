import { useNavigate } from "react-router-dom";
import { useRootStore } from "../../store";
import { RecipeCard } from "../organisms/cards/RecipeCard";
import { recipesMockData } from "../../assets/mockData";
import { BaseTemplate } from "./BaseTemplate";


export const RecipesTemplate = () => {
  const selectedRecipe = useRootStore(state => state.selectedRecipe);
  const setRecipe = useRootStore(state => state.setRecipe);
  console.log(selectedRecipe);
  const navigate = useNavigate();
  return (
    <BaseTemplate>
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
    </BaseTemplate>
  );
};
