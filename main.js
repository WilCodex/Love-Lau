import { DarkMode, Carousel } from "/Js/DarkMode.js";
import JSConfetti from "js-confetti";

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
