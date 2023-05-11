const input = document.getElementById(`font-size-control`);
const textChange = document.getElementById(`text`);
input.addEventListener(`input`, (event) => {
  const fontSizeChange = input.value + `px`;
  textChange.style.fontSize = fontSizeChange;
});
