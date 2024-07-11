import { NavLink } from "react-router-dom";
import useTheme from "../context/context";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const { themeMode, setDark, setLight } = useTheme();
  console.log("rerender");
  return (
    <div className="bg-slate-200 flex items-center justify-between h-[50px] select-none px-4 font-medium text-lg dark:bg-slate-900 dark:text-white">
      <div>Logo</div>
      <div className="flex gap-4 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <div className="h-[25px] w-[1px] bg-slate-500"></div>
        {themeMode === "light" ? (
          <FaMoon onClick={setDark} className="cursor-pointer"></FaMoon>
        ) : (
          <FaSun onClick={setLight} className="cursor-pointer"></FaSun>
        )}
      </div>
    </div>
  );
};

export default NavBar;
