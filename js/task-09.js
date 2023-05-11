const bodyEl = document.querySelector(`body`);
const colorShows = document.querySelector(`.color`);
const changeColor = document.querySelector(`.change-color`);
changeColor.addEventListener("click", () => {
  colorShows.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
