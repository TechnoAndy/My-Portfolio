const hamburger = document.querySelector('.bar');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));

// Email validation
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.style.visibility = 'visible';
  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
  msg.innerText = message;
  input.className = type ? '' : 'input-error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /^[a-z][a-z0-9_@.]*$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-from-validation');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Your email address should be in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (nameValid && emailValid) {
    form.submit();
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
});

// preserve data with localStorage
const formDataFromLocalStorage = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : null;
const formData = {
  name: formDataFromLocalStorage ? formDataFromLocalStorage.name : '',
  email: formDataFromLocalStorage ? formDataFromLocalStorage.email : '',
  text: formDataFromLocalStorage ? formDataFromLocalStorage.text : '',
};

const setFormData = () => {
  form.elements.name.value = formData.name;
  form.elements.email.value = formData.email;
  form.elements.text.value = formData.text;
};

setFormData();

form.elements.name.addEventListener('change', () => {
  formData.name = form.elements.name.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

form.elements.email.addEventListener('change', () => {
  formData.email = form.elements.email.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

form.elements.text.addEventListener('change', () => {
  formData.text = form.elements.text.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
