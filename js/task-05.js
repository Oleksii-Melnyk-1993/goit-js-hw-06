const refs = {
  input: document.querySelector(`#name-input`),
  nameLabel: document.querySelector(`#name-output`),
};
refs.input.addEventListener(`input`, () => {
  const name = refs.input.value.trim();
  refs.nameLabel.textContent = name ? name : `Anonymous`;
});
