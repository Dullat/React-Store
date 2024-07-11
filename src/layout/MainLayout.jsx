import NavBar from "../componants/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
};

export default MainLayout;
