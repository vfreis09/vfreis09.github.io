const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".mobile-overlay");
const icon = menuToggle.querySelector("i");

function toggleMenu() {
  const isActive = navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  if (isActive) {
    icon.className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
  } else {
    icon.className = "fa-solid fa-bars";
    document.body.style.overflow = "auto";
  }
}

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      icon.className = "fa-solid fa-bars";
      document.body.style.overflow = "auto";
    }
  });
});
