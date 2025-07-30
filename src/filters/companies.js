import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const companiesDOM = getElement(".companies");

const companyFilter = (products) => {
  const companies = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  companiesDOM.innerHTML = companies
    .map((company) => `<button class="company-btn">${company}</button>`)
    .join("");

  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      const text = element.textContent;
      const newProducts = products.filter(
        (product) => product.company === text
      );
      display(newProducts, getElement(".products-container"), true);
      if (text === "all") {
        display(products, getElement(".products-container"), true);
      }
    }
  });
};
export default companyFilter;
