const refs = {
  input: document.querySelector(`#name-input`),
  nameLabel: document.querySelector(`#name-output`),
};
refs.input.addEventListener(`input`, () => {
  const nameInput = refs.input.value.trim();
  refs.nameLabel.textContent = nameInput ? nameInput : `Anonymous`;
});
