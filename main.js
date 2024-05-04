import { DarkMode, Carousel } from "/Js/DarkMode.js";
import JSConfetti from "js-confetti";
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  cssMode: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  thumbs: {
    thumbsContainerClass: "swiper-thumbs"
  }
});
const renderDarkMode = () => {
  const DARK_MODE = new DarkMode();
  DARK_MODE.detectDarkMode();
};
const renderCarousel = (index) => {
  const CAROUSEL = new Carousel();
  CAROUSEL.newCarousel(index);
};
function mainApp() {
  renderDarkMode();
  for (let i = 1; i < 2; i++) {
    renderCarousel(i);
  }
}
mainApp();

const GIFT_CLICK = document.querySelector(".gift__click");
const GIFT_VIDEO = document.querySelector(".gift__video");
GIFT_CLICK.addEventListener("click", () => {
  const jsConfetti = new JSConfetti();
  setInterval(() => {
    jsConfetti.addConfetti({
      emojis: ["😍", "❤️", "💕", "😘"],
      emojiSize: 50
    });
  }, 2000);
  GIFT_CLICK.classList.toggle("animated__gift");
  GIFT_VIDEO.style.display = "flex";
  const VIDEO = GIFT_VIDEO.querySelector("video");
  VIDEO.play();
});
