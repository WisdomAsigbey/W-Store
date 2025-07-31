// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../fullYear.js";

// specific imports
import { getElement, singleProductURL, formatPrice } from "../utils.js";
import { addToCart } from "../cart/setupCart.js";

const loading = getElement(".page-loading");
const productDOM = getElement(".single-product-center");
const productImg = getElement(".single-product-img");
const productTitle = getElement(".single-product-title");
const pageHeroTitle = getElement(".page-hero-title");
const productCompany = getElement(".single-product-company");
const productPrice = getElement(".single-product-price");
const productColorDOM = getElement(".single-product-colors");
const productDesc = getElement(".single-product-desc");
const productBtn = getElement(".addToCartBtn");

let productID;

const init = async () => {
  const urlID = window.location.search;

  try {
    const response = await fetch(`${singleProductURL}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();

      const {
        id,
        fields: { colors, company, description, name, price, image: img },
      } = product;
      const image = img[0].thumbnails.large.url;

      document.title = `${name.toUpperCase()} | W-Store`;
      pageHeroTitle.textContent = `Home | ${name}`;
      productImg.src = image;
      productTitle.textContent = name;
      productCompany.textContent = company;
      productDesc.textContent = description;
      productBtn.dataset.id = id;
      productPrice.textContent = formatPrice(price);

      colors.forEach((color) => {
        const element = document.createElement("span");
        element.classList.add("product-color");
        element.style.backgroundColor = color;
        productColorDOM.appendChild(element);
      });

      productID = id;
      productBtn.addEventListener("click", () => {
        addToCart(productID);
      });
    } else {
      productDOM.innerHTML = `<div>
      <h3 class= "error">sorry, something went wrong</h3>
      <a href = "index.html" class= "btn">back home</a>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = "none";
};

window.addEventListener("DOMContentLoaded", init);
