const cartBtnToggle = document.querySelector(".toggle-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");

cartBtnToggle.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
