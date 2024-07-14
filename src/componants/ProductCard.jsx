import { Link } from "react-router-dom";
import { FaPlus, FaCheck } from "react-icons/fa";
import useTheme from "../context/context";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { cart } = useTheme();

  const checkCart = () => {
    if (cart.includes(product.id)) {
      setInCart(true);
    }
  };

  const handleClick = () => {
    if (!inCart) {
      cart.push(product.id);
      setInCart(true);
    } else if (inCart === true) {
      const idIndex = cart.indexOf(product.id);
      cart.splice(idIndex, 1);
      setInCart(false);
    }
  };

  useEffect(() => {
    checkCart();
  }, []);

  return (
    <div className="w-full max-w-64 md:max-w-48 flex flex-col xsm:max-w-[80%] p-4 relative bg-white rounded-lg text-black group transition-all overflow-hidden">
      <div
        className=" w-full aspect-square bg-slate-500 
                  bg-cover m-auto"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>
      <div className="flex flex-col gap-2 flex-grow ">
        <p className="text-center mt-2 ">{product.title}</p>
        <div className="flex flex-col mt-auto">
          <p className="bg-slate-500 w-fit m-auto px-2 rounded-md text-white">
            Rating: {product.rating.rate}
          </p>
          <Link
            to={`/React-Store/product/${product.id}`}
            className="px-2 py-1 bg-blue-700 rounded-md text-white text-center m-auto mt-4 w-full max-w-48 dark:bg-slate-700 "
          >
            Check-Out
          </Link>
        </div>
      </div>
      <Link
        onClick={handleClick}
        className="absolute top-2 right-2 group-hover:scale-110 group-hover:bg-slate-600 translate-x-7 translate-y-[-40px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all p-1 rounded-full cursor-pointer text-white"
      >
        {inCart ? (
          <FaCheck className="text-lg"></FaCheck>
        ) : (
          <FaPlus className="text-lg"></FaPlus>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
