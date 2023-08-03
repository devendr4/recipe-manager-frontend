import { useRootStore } from "../../store";
import { RecipeDetailTemplate } from "../templates/RecipeDetail";

export const RecipeDetailPage = () => {
  const selectedRecipe = useRootStore(state => state.selectedRecipe);
  return selectedRecipe ? <RecipeDetailTemplate data={selectedRecipe} /> : null;
};
