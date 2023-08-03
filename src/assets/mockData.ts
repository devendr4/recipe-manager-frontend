import { RecipeData } from "../types";

export const recipesMockData: RecipeData[] = [
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
