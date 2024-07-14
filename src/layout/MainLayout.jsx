import NavBar from "../componants/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../componants/Footer";

const MainLayout = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-dvh flex flex-col">
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;