// ====== TOGGLE HAMBURGER MENU ======
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-btn");
  const closeMenuBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    mobileMenu.classList.add("shadow-2xl");
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("shadow-2xl");
  });

  mobileMenu.querySelectorAll(".nav-item").forEach((item) =>
    item.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    })
  );
});
