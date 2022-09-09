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

// Validate contact form
/* function validate() {
  const text = document.getElementById('text1').value;
  const regx = /^([a-z0-9]+)@([a-z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;

  if (regx.test(text)) {
    document.getElementById('ibitext').innerHTML = 'Email is valid';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'blue';
  } else {
    document.getElementById('ibitext').innerHTML = 'Email requires lowercase only';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'maroon';
  }
}
validate(); */

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
