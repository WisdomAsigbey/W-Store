import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const priceInput = getElement(".price-filter");
const priceValueDOM = getElement(".price-value");

const priceFilter = (products) => {
  let maxPrice = products.map((product) => product.price);
  maxPrice = Math.ceil(Math.max(...maxPrice) / 100);
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValueDOM.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener("input", () => {
    const priceValue = parseInt(priceInput.value);

    priceValueDOM.textContent = `Value : $${priceValue}`;
    let newProducts = products.filter(
      (product) => product.price / 100 < priceValue
    );
    display(newProducts, getElement(".products-container"), true);
    if (newProducts.length < 1) {
      const productDOM = getElement(".products-container");
      productDOM.innerHTML = `<h3 class = "filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default priceFilter;
