import { allProductsURL } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsURL);
  if (response) {
    const products = await response.json();
    return products;
  }
  return response;
};

export default fetchProducts;
