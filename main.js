const CONTENT_WRAPPER = document.querySelector(".content__wrapper");
const ENVELOPE_LETTER = document.querySelector(".envelope__letter");
CONTENT_WRAPPER.addEventListener("mouseover", () => {
  ENVELOPE_LETTER.style.transform = "translateY(-15rem)";
});
CONTENT_WRAPPER.addEventListener("mouseleave", () => {
  ENVELOPE_LETTER.style.transform = "translateY(0)";
});
