// Fake store API (To get documentation about the API, visit search  fake store api in your browser)
const allProductsURL = "https://fakestoreapi.com/products";

// single product URL(add product id to url)
const singleProductURL = `https://fakestoreapi.com/products/`;

const getElement = (selection) => {
  const element = document.querySelector(selection);
  element
    ? element
    : (() => {
        throw new Error(
          `Please check "${selection}" selector, no such element exist`
        );
      })();
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
};
