import { Outlet } from "react-router-dom";
import ProductsHero from "../componants/ProductsHero";

const ProductsPage = () => {
  return (
    <div className="p-4 max-w-7xl self-center w-full">
      <ProductsHero></ProductsHero>
      <Outlet />
    </div>
  );
};

export default ProductsPage;
