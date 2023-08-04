import { BiSolidCake } from "react-icons/bi";
import { BiSolidHomeHeart, BiPlus } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
const options = [
  { title: "home", Icon: BiSolidHomeHeart, route: "/" },
  { title: "recipes", Icon: BiSolidCake, route: "/recipes" },
  { title: "new", Icon: BiPlus, route: "/new-recipe" },
];
export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-pink-300 text-black h-14 z-50">
      <ul class="flex gap-1 justify-center">
        {options.map(({ Icon, title, route }) => (
          <Link to={route} class="w-1/3 h-full">
            <li class="flex flex-col items-center  ">
              {title}
              <Icon size={"1.7em"} />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export const NavBarWrapper = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
