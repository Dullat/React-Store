import { NavLink } from "react-router-dom";

const ProductsHero = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-gray-900 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white bg-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2";

  return (
    <div>
      <h2 className="text-2xl mt-4">Discover through different categories.</h2>
      <div className="mt-4 flex gap-4 flex-wrap">
        <NavLink to="/React-Store/products/" className={"rounded-md px-3 py-2"}>
          All :
        </NavLink>
        <NavLink
          to="/React-Store/products/men's clothing"
          className={linkClass}
        >
          Menware
        </NavLink>
        <NavLink
          to="/React-Store/products/women's clothing"
          className={linkClass}
        >
          Women
        </NavLink>
        <NavLink to="/React-Store/products/jewelery" className={linkClass}>
          Jewelery
        </NavLink>
        <NavLink to="/React-Store/products/electronics" className={linkClass}>
          Elecrons
        </NavLink>
      </div>
      <hr className="mt-4 bg-slate-600 h-[2px]" />
    </div>
  );
};

export default ProductsHero;
