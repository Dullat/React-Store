import { useEffect, useState } from "react";
import getProducts from "../getdata/getdata";
import { useParams } from "react-router-dom";
import useTheme from "../context/context";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();
  const { cart } = useTheme();

  console.log(cart);

  const checkCart = () => {
    const processedId = parseInt(id);
    if (cart.includes(processedId)) {
      setInCart(true);
    }
  };

  const handleClick = () => {
    if (!inCart) {
      cart.push(product.id);
      setInCart(true);
    }
  };

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getProducts(0, "none", id);
        setProduct(data);
        checkCart();
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
  return (
    <div className="max-w-6xl m-auto">
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-1 md:text-center gap-4 p-4">
          <div className="w-full max-w-72 md:max-w-56 md:mt-4 m-auto aspect-square flex items-center bg-white rounded-lg overflow-hidden">
            <img className="m-auto" src={product.image} alt="" />
          </div>
          <div className="m-auto">
            <p className="text-2xl">{product.title}</p>
            <p className="text-xl font-semibold opacity-80 mt-2">
              ${product.price}
            </p>
            <p className="opacity-80 mt-2">{product.description}</p>
            <p className="bg-slate-600 w-fit px-1 rounded-md text-white md:m-auto md:mt-2 mt-2">
              Rating: {product.rating.rate}
            </p>
            <button
              onClick={handleClick}
              className="bg-blue-600 dark:bg-slate-700 px-2 py-1 rounded-md text-white mt-4"
            >
              {inCart ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
