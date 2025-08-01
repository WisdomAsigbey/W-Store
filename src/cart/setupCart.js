import { openCart } from "./toggleCart.js";
import {
  formatPrice,
  getElement,
  getStorageItem,
  setStorageItem,
} from "../utils.js";
import { addToCartDOM } from "./addToCartDOM.js";
import { findProduct } from "../store.js";

const cartItemCountDOM = getElement(".cart-count");
const cartDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  const item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    // find product if it doesn't exist
    let product = findProduct(id);
    // add to cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add to cart DOM
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    let item = [...cartDOM.querySelectorAll(".cart-item-amount")];

    const selectedItem = item.find((item) => item.dataset.id === id);
    selectedItem.textContent = amount;
  }

  // add 1 to cart count
  displayCartCount();
  // display cart total
  displayCartTotal();
  // set up cart storage
  setStorageItem("cart", cart);
  openCart();
};

// display cart count value
function displayCartCount() {
  let itemCount = cart.reduce(
    (total, currentItem) => (total += currentItem.amount),
    0
  );
  cartItemCountDOM.textContent = itemCount;
}

// display cart total functionality
function displayCartTotal() {
  const itemAmount = cart.reduce((total, currentCartItem) => {
    let amount = (total += currentCartItem.amount * currentCartItem.price);
    return amount;
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(itemAmount)}`;
}

// increase amount function
function increaseAmount(id) {
  let newAmount;
  cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount += 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
// decrease amount function
function decreaseAmount(id) {
  let newAmount;
  cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount -= 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

// remove item functionality
function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
}

// display cart items in cart when DOM loads
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

// cartDOM event functionality
function cartDOMEvents() {
  cartDOM.addEventListener("click", (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    const parentID = parent.dataset.id;

    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(element.dataset.id);
      parent.parentElement.remove();
    }
    // increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      }
      parent.previousElementSibling.textContent = newAmount;
    }

    displayCartCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

// setup cart imediately DOM loads
const init = () => {
  console.log(cart);

  // display total cart item count
  displayCartCount();
  // display cart total
  displayCartTotal();
  // display cart items in DOM
  displayCartItemsDOM();
  // cart DOM Events
  cartDOMEvents();
};
init();
