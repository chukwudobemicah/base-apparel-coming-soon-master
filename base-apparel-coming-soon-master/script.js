const errorMessage = document.querySelector('.error-message');
const input = document.querySelector('input');
const form = document.querySelector('form');
const regexEmail =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const clearErrorMessage = function () {
  errorMessage.textContent = '';
};

const checkEmail = function (inputValue) {
  if (inputValue === '') {
    errorMessage.classList.remove('hidden');
    input.classList.add('input-error');
  } else {
    errorMessage.classList.remove('hidden');
    clearErrorMessage();
    errorMessage.textContent = 'Email accepted';
    errorMessage.style.color = 'green';
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkEmail(input.value);
});
// const micah = 'dobemike101@gmail.com';
// console.log(micah.match(regexEmail));
// console.log(!micah.match(regexEmail));
// console.log(micah);

// clearErrorMessage();
// errorMessage.textContent = 'Email accepted';
// console.log(errorMessage);
