const searchForm = document.querySelector(".search-form");
const cart = document.querySelector(".shopping-cart");
const loginForm = document.querySelector(".login-form");
const navbar = document.querySelector(".navbar");

document.querySelector("#search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
});

document.querySelector("#cart-btn").addEventListener("click", () => {
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
});

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
});

document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
});

window.addEventListener("scroll", () => {
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
});

// Slide
const slides = document.querySelectorAll(".home .slides-container .slide");
const prevSlide = document.querySelector("#prev-slide");
const nextSlide = document.querySelector("#next-slide");
let index = 0;

const next = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

const prev = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

prevSlide.addEventListener("click", prev);
nextSlide.addEventListener("click", next);
