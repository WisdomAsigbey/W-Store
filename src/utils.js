// Fake store API (To get documentation about the API, visit search  fake store api in your browser)
const allProductsURL = "https://www.course-api.com/javascript-store-products";

// single product URL(add query for id parameter at end of url "?id=value")
const singleProductURL = `https://www.course-api.com/javascript-store-single-product`;

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;

  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsURL,
  singleProductURL,
  getStorageItem,
  setStorageItem,
  getElement,
  formatPrice,
};
