import { setStorageItem, getStorageItem } from "./utils.js";

let store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      category,
      price,
      image,
      title,
      description,
      rating: { rate, count },
    } = product;
    return { id, category, price, image, title, description, rate, count };
  });
  setStorageItem("store", store);
};

export { setupStore, store };
