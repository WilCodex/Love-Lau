import { DarkMode } from "./Js/DarkMode.js";
import Swiper from "swiper/bundle";
import JSConfetti from "js-confetti";

// import styles bundle
import "swiper/css/bundle";
const DARK_MODE = new DarkMode();
DARK_MODE.detectDarkMode();
// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  cssMode: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
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
const IMAGES = [
  {
    src: "/public/img/Slider//1.webp",
    color: "#f1b965",
    title: "“Yo viajo a tu lado con lo bueno y lo malo.”"
  },
  {
    src: "/public/img/Slider/2.webp",
    color: "#C9A4A8",
    title: "“Lo mejor de mi vida es estar en la tuya”."
  },
  {
    src: "/public/img/Slider/3.webp",
    color: "#2B6B67",
    title:
      "“Tú eres la historia más bonita que el destino escribió en mi vida”."
  },
  {
    src: "/public/img/Slider/4.webp",
    color: "#5988B3",
    title: "“Pudo haber sido lindo, pero lo hiciste perfecto”."
  },
  {
    src: "/public/img/Slider/5.webp",
    color: "#94AC88",
    title: "“Si sé lo que es el amor, es gracias a ti”."
  },
  {
    src: "/public/img/Slider/6.webp",
    color: "#B74D55",
    title: "“Erase una vez… el amor”."
  },
  {
    src: "/public/img/Slider/7.webp",
    color: "#465955",
    title: "“Por más momentos juntos”."
  },
  {
    src: "/public/img/Slider/8.webp",
    color: "#62C982",
    title: "“Es una locura amar, a menos que se ame con locura”."
  },
  {
    src: "/public/img/Slider/9.webp",
    color: "#6A863F",
    title:
      "“Solo hay dos momentos en que quiero estar contigo: Ahora y para Siempre”."
  },
  {
    src: "/public/img/Slider/10.webp",
    color: "#0B181F",
    title: "“No te quiero para mí, te quiero conmigo. Es diferente”."
  },
  {
    src: "/public/img/Slider/11.webp",
    color: "#1A1B24",
    title: "“Con todo mi amor, para toda la vida”"
  },
  {
    src: "/public/img/Slider/12.webp",
    color: "#908DA3",
    title: "“El amor no necesita ser perfecto. Solo necesita ser verdadero”"
  },
  {
    src: "/public/img/Slider/13.webp",
    color: "#B8727C",
    title:
      "“No es la historia más bonita, ni la más perfecta. Es la nuestra y con eso basta”."
  },
  {
    src: "/public/img/Slider/14.webp",
    color: "#C6A487",
    title:
      "“Amar a alguien es poder ver toda su magia y recordársela cuando la olvide”"
  },
  {
    src: "/public/img/Slider/15.webp",
    color: "#C38D8B",
    title:
      "“Una palabra nos libera de todo el peso y el dolor de la vida: esa palabra es amor”."
  },
  {
    src: "/public/img/Slider/16.webp",
    color: "#D28584",
    title: "“Mis días son mejores contigo”."
  },
  {
    src: "/public/img/Slider/17.webp",
    color: "#C39C9C",
    title: "“Eres mi principio y mi fin”."
  }
];
const SLIDER_IMAGE = document.querySelector(".slider__image img");
const SLIDER_UP = document.querySelector(".slider__up");
const SLIDER_DOWN = document.querySelector(".slider__down");
const SLIDER_TITLE = document.querySelector(".slider__title");
const SLIDER_H2 = SLIDER_TITLE.querySelector("h2");

function updateSliderUI() {
  SLIDER_IMAGE.src = IMAGES[currentIndex].src;
  SLIDER_TITLE.style.backgroundColor = IMAGES[currentIndex].color;
  SLIDER_H2.textContent = IMAGES[currentIndex].title;
}
let currentIndex = 0;

SLIDER_UP.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= IMAGES.length) {
    currentIndex = 0;
  }
  updateSliderUI();
});

// Controlador de eventos para SLIDER_DOWN
SLIDER_DOWN.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = IMAGES.length - 1;
  }
  updateSliderUI();
});
const HEART = document.querySelector(".heart__float");
const LAURA = document.querySelector(".laura__love");
HEART.addEventListener("click", () => {
  LAURA.style.display = "flex";
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["😍", "❤️", "💕", "😘"],
    emojiSize: 50
  });
});
const CLOSE = document.querySelector(".close");
CLOSE.addEventListener("click", () => {
  LAURA.style.display = "none";
});
