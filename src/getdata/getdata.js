const getProducts = async (number, categoty = "none", id = undefined) => {
  const limit = `?limit=${number}`;
  let getString = ``;
  if (categoty === "none") {
    getString = limit;
  } else if (id !== undefined) {
    getString = `/${id}`;
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
