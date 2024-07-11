const getProducts = async (number, type = "none") => {
  const limit = `limit=${number}`;
  let getString = ``;
  if (type === "none") {
    getString = limit;
  }
  try {
    const res = await fetch(`https://fakestoreapi.com/products?${getString}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
