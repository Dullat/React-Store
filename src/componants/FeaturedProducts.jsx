import { useEffect, useState } from "react";
import getProducts from "../getdata/getdata";
import ProductCard from "./ProductCard";

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
      <p className="text-3xl font-semibold text-white">Featured Products</p>
      <div className="flex md:flex-wrap mt-6 gap-4 justify-evenly">
        {loading ? (
          <div>loading</div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
