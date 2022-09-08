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

function validate() {
  const text = document.getElementById('text1').value;
  const regx = /^([a-z0-9]+)@([a-z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;

  if (regx.test(text)) {
    document.getElementById('ibitext').innerHTML = 'valid';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'green';
  } else {
    document.getElementById('ibitext').innerHTML = 'invalid (lowercase only)';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'red';
  }
}
validate();
