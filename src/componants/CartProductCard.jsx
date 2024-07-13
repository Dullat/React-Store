import React, { useEffect, useState } from "react";

const CartProductCard = ({ product, handleClick }) => {
  const [loading, setLoading] = useState(false);
  const handleRemove = () => {
    setLoading(true);
    handleClick(product.id);
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <div className="flex gap-4 p-4">
        <div
          className="h-20 aspect-square bg-white bg-cover bg-center rounded-md "
          // style={{ backgroundImage: `url(${product.image})` }}
        >
          <img src={product.image} className="h-full m-auto" alt="" />
        </div>
        <div className="flex w-full items-center">
          <div>
            <p className="mb-2">{product.title}</p>
            <p>${product.price}</p>
          </div>
          <button
            onClick={handleRemove}
            className="ml-auto bg-blue-600 px-4 py-1 rounded-md text-white cursor-pointer"
          >
            {loading ? "Removing.." : "Remove"}
          </button>
        </div>
      </div>
      <hr className="bg-slate-100" />
    </>
  );
};

export default CartProductCard;
