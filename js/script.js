const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const modal = document.querySelector(".modal");

openMenu.addEventListener("click", function () {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", function () {
  modal.classList.add("hidden");
  openMenu.classList.remove("hidden");
  modal.classList.remove("flex");
  closeMenu.classList.add("hidden");
});
