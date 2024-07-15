import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../getdata/getdata";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      let cValue = "";
      if (category === undefined) {
        cValue = "none";
      } else if (category !== undefined) {
        cValue = category;
      }
      try {
        console.log(category);
        const productsData = await getProducts(20, cValue);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(loading);
        console.log(products);
      }
    };
    getdata();
  }, [category]);
  return (
    <div>
      {loading ? (
        <div className="grid place-content-center mt-12"> loading.....</div>
      ) : (
        <div className="flex flex-wrap justify-evenly gap-4 mt-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
