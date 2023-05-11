const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const emailForm = form.elements.email;
  const passForm = form.elements.password;
  if (emailForm.value === "" || passForm.value === "") {
    alert(`Fill the form`);
  } else {
    const formData = {
      email: emailForm.value,
      password: passForm.value,
    };
    console.log(formData);
    form.reset();
  }
}
