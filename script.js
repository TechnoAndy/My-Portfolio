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

// Preserve data in the browser
/* function fillInputs() {
  // seting on load
  const username = document.getElementById('text1n');
  const valueForName = localStorage.getItem('username');
  if (valueForName) {
    username.value = valueForName;
  }
  username.addEventListener('change', (event) => {
    username.value = event.target.value;
    localStorage.setItem('username', event.target.value);
  });
  const email = document.getElementById('text2');
  const ValueFormEmail = localStorage.getItem('email');
  if (ValueFormEmail) {
    email.value = ValueFormEmail;
  }
  email.addEventListener('change', (event) => {
    email.value = event.target.value;
    localStorage.setItem('email', event.target.value);
  });
  const text = document.getElementById('text3t');
  const valueForText = localStorage.getItem('text');
  if (valueForText) {
    text.value = valueForText;
  }
  text.addEventListener('change', (event) => {
    text.value = event.target.value;
    localStorage.setItem('text', event.target.value);
  });
}
fillInputs(); */

function test() {

  var uid = document.getElementById("text1n").value;
  var pw = document.getElementById("text3t").value;
  var email = document.getElementById("text2").value;

  var user = localStorage.setItem("uid", uid); 
  var pass = localStorage.setItem("pw", pw);
  var em = localStorage.setItem("email", email);

  var user = localStorage.getItem("uid", uid);
  var pass = localStorage.getItem("pw", pw);
  var em = localStorage.getItem("email", email);
}
