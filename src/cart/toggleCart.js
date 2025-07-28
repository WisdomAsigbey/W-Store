const cartBtn = document.querySelector(".toggle-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const closeCartBtn = document.querySelector(".cart-close");

cartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
});
