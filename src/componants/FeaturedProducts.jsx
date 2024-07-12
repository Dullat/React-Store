import { useEffect, useState } from "react";
import getProducts from "../getdata/getdata";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts(4);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        console.log(products);
        console.log(loading);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-4 p-4 m-auto bg-slate-600">
      <p className="text-3xl font-semibold">Featured Products</p>
      <div className="flex flex-wrap mt-6 gap-4 justify-around">
        {loading ? (
          <div>loading</div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-72 p-4 bg-white rounded-lg text-black"
            >
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
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
