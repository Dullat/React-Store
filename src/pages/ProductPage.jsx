import { useEffect, useState } from "react";
import getProducts from "../getdata/getdata";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getdata = async () => {
      try {
        const data = await getProducts(0, "none", id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
  return <div>{loading ? <div>loading</div> : <p>{product.id}</p>}</div>;
};

export default ProductPage;
