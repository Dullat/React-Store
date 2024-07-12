import { NavLink } from "react-router-dom";

const ProductsHero = () => {
  return (
    <div>
      <h2 className="text-2xl mt-4">Discover through different categories.</h2>
      <div className="mt-4 flex gap-4 flex-wrap">
        <NavLink className="bg-slate-600 px-2 py-1 rounded-md text-white">
          All
        </NavLink>
        <NavLink
          to="/products/men's clothing"
          className="bg-slate-600 px-2 py-1 rounded-md text-white"
        >
          Menware
        </NavLink>
        <NavLink
          to="/products/women's clothing"
          className="bg-slate-600 px-2 py-1 rounded-md text-white"
        >
          Women
        </NavLink>
        <NavLink
          to="/products/jewelery"
          className="bg-slate-600 px-2 py-1 rounded-md text-white"
        >
          Jewelery
        </NavLink>
        <NavLink
          to="/products/electronics"
          className="bg-slate-600 px-2 py-1 rounded-md text-white"
        >
          Elecrons
        </NavLink>
      </div>
      <hr className="mt-4 bg-slate-600 h-[2px]" />
    </div>
  );
};

export default ProductsHero;
