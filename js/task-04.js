const counterValue = document.querySelector(`#value`);
let numberClick = 0;
document
  .querySelector(`button[data-action="increment"]`)
  .addEventListener(`click`, () => {
    numberClick += 1;
    counterValue.textContent = numberClick;
  });
document
  .querySelector(`button[data-action="decrement"]`)
  .addEventListener(`click`, () => {
    numberClick -= 1;
    counterValue.textContent = numberClick;
  });
