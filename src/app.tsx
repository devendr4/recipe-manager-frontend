import "./app.css";
import { NavBarWrapper } from "./components/organisms/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { RecipesPage } from "./components/pages/recipes";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBarWrapper />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        { path: "/recipes", element: <RecipesPage /> },
      ],
    },
  ]);

  return (
    <div class="h-[calc(100vh+4.5rem)]">
      <RouterProvider router={router} />
    </div>
  );
}
