import React, { useEffect, useState } from "react";
import CartProductCard from "../componants/CartProductCard";
import getProducts from "../getdata/getdata";
import useTheme from "../context/context";

const CartPage = () => {
  const { cart } = useTheme();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const getCart = async () => {
    try {
      let temp = [];
      for (const productId of cart) {
        const product = await getProducts(0, "none", productId);
        temp.push(product);
      }
      setProducts(temp);
      setLoading(false);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id) => {
    const idIndex = cart.indexOf(id);
    cart.splice(idIndex, 1);
    getCart();
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="w-full max-w-6xl m-auto">
      <p className="text-3xl font-semibold text-center my-4 opacity-70">
        Shopping Cart
      </p>
      <div>
        {loading ? (
          <p className="mt-8 text-center">loading.....</p>
        ) : (
          products.map((product) => (
            <CartProductCard
              key={product.id}
              product={product}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
