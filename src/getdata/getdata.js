const getProducts = async (number, categoty = "none") => {
  const limit = `?limit=${number}`;
  let getString = ``;
  if (categoty === "none") {
    getString = limit;
  } else getString = `/category/${categoty}`;
  try {
    const res = await fetch(`https://fakestoreapi.com/products${getString}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
