import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const form = getElement(".input-form");
const formInput = getElement(".search-input");
const productDOM = getElement(".products-container");

const searchFilter = (products) => {
  form.addEventListener("keyup", () => {
    let value = formInput.value;
    value = value.toLowerCase();
    if (value) {
      const newProducts = products.filter((product) =>
        product.name.startsWith(value)
      );
      display(newProducts, productDOM, true);
      if (newProducts.length < 1) {
        productDOM.innerHTML = `<h3 class = "filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      display(products, productDOM, true);
    }
  });
};
export default searchFilter;
