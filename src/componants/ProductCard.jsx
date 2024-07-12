const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-64 md:max-w-48 xsm:max-w-[80%] p-4 bg-white rounded-lg text-black">
      <div
        className=" aspect-square bg-slate-500 
                  bg-cover m-auto"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className="text-center mt-2 ">{product.title}</p>
        <p className="bg-slate-500 w-fit m-auto px-2 rounded-md mt-auto text-white">
          Rating: {product.rating.rate}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
