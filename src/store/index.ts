import { RecipeData } from "../types";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RootState {
  selectedRecipe?: RecipeData;
  setRecipe: (recipe: RecipeData) => void;
}

export const useRootStore = create<RootState>()(
  devtools(
    persist(
      set => ({
        selectedRecipe: undefined,
        setRecipe: recipe => set(() => ({ selectedRecipe: recipe })),
      }),
      { name: "rootStore" }
    )
  )
);
