const errorMessage = document.querySelector('.error-message');
const input = document.querySelector('input');
const form = document.querySelector('form');

const validateEmail = function (email) {
  const regex = /^[a-zA-Z][a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]{2,}$/;
  return regex.test(email);
};

const clearErrorMessage = function () {
  return (errorMessage.textContent = '');
};
const addErrorMessage = function () {
  errorMessage.textContent = 'Email accepted';
  errorMessage.style.color = 'green';
};
const checkEmail = function (inputValue) {
  if (inputValue === '' && !validateEmail(inputValue)) {
    errorMessage.classList.remove('hidden');
    input.classList.add('input-error');
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkEmail(input.value);
});
