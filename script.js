const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
menuIcon.addEventListener("click", function () {
  navMenu.classList.toggle("visible");
});
