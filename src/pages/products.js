// global imports
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import "../toggleSidebar.js";
import "../fullYear.js";
// specific imports
import { getElement } from "../utils.js";
import { store, setupStore } from "../store.js";
import display from "../displayProducts.js";

// import filters
import searchFilter from "../filters/search.js";
import priceFilter from "../filters/price.js";
import companyFilter from "../filters/companies.js";
// fetch product import
import fetchProducts from "../fetchProducts.js";

const init = async () => {
  const loading = getElement(".page-loading");
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  display(store, getElement(".products-container"));
  searchFilter(store);
  priceFilter(store);
  companyFilter(store);
  loading.style.display = "none";
};
init();
