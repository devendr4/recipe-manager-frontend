export interface RecipeData {
  name: string;
  img: string;
  price: number;
  category: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  price: number;
}
