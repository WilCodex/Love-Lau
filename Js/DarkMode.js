export class DarkMode {
  #document;
  constructor() {
    this.#document = document.documentElement;
  }
  detectDarkMode() {
    if (window.matchMedia) {
      const DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)");
      if (DARK_MODE.matches) {
        this.#document.setAttribute("data-theme", "dark");
      } else {
        this.#document.setAttribute("data-theme", "light");
      }
    }
  }
}
export class Carousel {
  #Wrapper;
  #Container;
  constructor() {
    this.#Wrapper = carousel__wrapper;
    this.#Container = carousel__container.cloneNode(true);
  }
  newCarousel(index) {
    const WRAPPER = document.querySelector("#carousel__wrapper");
    const CONTAINER = document.querySelector("#carousel__container");
    CONTAINER.id = index;
    const CLONE_CAROUSEL = WRAPPER.querySelector("section");
    CLONE_CAROUSEL.style.animationDuration = "30s";
    CLONE_CAROUSEL.style.animationName =
      index % 2 === 0 ? "scrollLeft" : "scrollRight";
    WRAPPER.appendChild(this.#Container);
  }
}
