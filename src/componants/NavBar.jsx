import { NavLink } from "react-router-dom";
import useTheme from "../context/context";
import { FaSun, FaMoon, FaCartPlus, FaHamburger } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const { themeMode, setDark, setLight } = useTheme();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isGone, setIsGone] = useState(false);
  const sidebar = useRef(null);
  const burgger = useRef(null);
  const darkbtn = useRef(null);

  const handleClick = () => {
    scrollToTop();
    setSidebarVisible((prev) => !prev);
  };

  const closeBar = () => {
    if (sidebarVisible === true) {
      setSidebarVisible((prev) => !prev);
    }
  };

  const handleOutsideClick = (e) => {
    if (
      sidebar.current &&
      !sidebar.current.contains(e.target) &&
      !burgger.current.contains(e.target) &&
      !darkbtn.current.contains(e.target)
    ) {
      setSidebarVisible(false);
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (sidebarVisible === true) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("click", handleOutsideClick);
    }
  }, [sidebarVisible]);
  console.log("rerender");

  const activeLinkClass = ({ isActive }) => {
    return isActive ? "text-white" : "";
  };

  const gone = () => {
    closeBar();
    setIsGone(true);
  };

  const came = () => {
    closeBar();
    setIsGone(false);
  };
  return (
    <div className="bg-slate-600 flex items-center h-[50px] gap-4 select-none px-4 font-medium text-lg dark:bg-slate-700 dark:text-white">
      <div>Logo</div>
      <div
        ref={sidebar}
        className={`flex gap-4 items-center ml-auto sm:bg-slate-400 sm:dark:bg-slate-500 sm:items-start sm:p-8 sm:fixed sm:inset-0 sm:inset-x-1/4 sm:right-0
           sm:z-10 sm:flex-col sm:pt-16 ${
             sidebarVisible ? "sm:translate-x-0" : "sm:translate-x-full"
           }
         aria-hidden={!sidebarVisible} transition-all`}
      >
        <NavLink
          to="/React-Store/"
          className={({ isActive }) =>
            isActive && !isGone ? "text-white" : ""
          }
          onClick={came}
        >
          Home
        </NavLink>
        <NavLink
          to="/React-Store/products"
          className={activeLinkClass}
          onClick={gone}
        >
          Products
        </NavLink>
        <div className="h-[25px] w-[1px] bg-slate-500 sm:hidden"></div>
        <div ref={darkbtn} onClick={(e) => e.stopPropagation()}>
          {themeMode === "light" ? (
            <FaMoon
              onClick={setDark}
              className="cursor-pointer sm:absolute sm:top-4 sm:left-12"
            ></FaMoon>
          ) : (
            <FaSun
              onClick={setLight}
              className="cursor-pointer sm:absolute sm:top-4 sm:left-12"
            ></FaSun>
          )}
        </div>
        <div className="h-[25px] w-[1px] bg-slate-500 sm:hidden"></div>
        <NavLink
          to="/React-Store/cart"
          className="sm:absolute sm:top-4 sm:left-4"
        >
          <FaCartPlus
            className="cursor-pointer"
            onClick={handleClick}
          ></FaCartPlus>
        </NavLink>
      </div>
      <div ref={burgger} className="sm:ml-auto sm:relative sm:z-20">
        <FaHamburger
          onClick={handleClick}
          className={`hidden sm:block ${
            sidebarVisible ? "rotate-12 origin-center" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default NavBar;
