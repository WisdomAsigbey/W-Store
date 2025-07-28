const navToggler = $(".toggle-btn-nav");
const sidebar = document.querySelector(".sidebar-overlay");
const closeBtn = $(".sidebar-close");

navToggler.on("click", () => {
  sidebar.classList.add("show");
});

closeBtn.on("click", () => {
  sidebar.classList.remove("show");
});
