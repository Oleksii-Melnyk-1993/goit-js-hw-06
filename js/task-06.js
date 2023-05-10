const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, () => {
  const lengthData = input.getAttribute(`data-length`);
  const inputLength = input.value.length;
  if (Number(lengthData) === inputLength) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  } else {
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
  }
});
