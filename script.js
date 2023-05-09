/* eslint-disable linebreak-style */

const hamburger = document.querySelector('.bar');
const navList = document.querySelector('.nav-list');
const body = document.querySelector('.content-section');
const worksBody = document.querySelector('.works');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));

function disableScroll() {
  worksBody.style.filter = 'blur(7px)';
  const xPos = window.scrollX;
  const yPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(xPos, yPos);
  };
}

function enableScroll() {
  worksBody.style.filter = 'blur(0px)';
  window.onscroll = '';
}

const cards = [
  {
    id: 1,
    title: 'Meals DB',
    imageM: './images/Meals-DB.png',
    imageD: '.images/Meals-DB.png',
    heading2: ['Meals', 'Front End Dev', '2022'],
    cardDescription:
      'This app is built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.',
    languages: ['javascript', 'ES6', 'webpack'],
  },
  {
    id: 2,
    title: 'Math Magicians',
    imageM: './images/Math-magicians.png',
    imageD: '.images/Math-magicians.png',
    heading2: ['Calculator', 'Front End Dev', '2022'],
    cardDescription:
      'This is a front-end mobile application that performs calculations for its users. This app allows individuals to enter mathematical equations and receive an immediate answer. It includes features such as basic arithmetic functions, scientific calculations, and a user-friendly interface for ease of use.',
    languages: ['html', 'css', 'react'],
  },
  {
    id: 3,
    title: 'Seminar',
    imageM: './images/Seminar.png',
    imageD: '.images/Seminar.png',
    heading2: ['Seminar', 'Front End Dev', '2022'],
    cardDescription:
      'This is an app where a user can book a seat at a seminar, information about feature speakers and the program is available ',
    languages: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'Rails Recipe App',
    imageM: './images/image4desktop.png',
    imageD: '.images/image4desktop.png',
    heading2: ['Recipe', 'Back End Dev', '2023'],
    cardDescription:
      'The Recipe app keeps track of all your recipes, ingredients, and inventory. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app allows you to make them public so anyone can access them.',
    languages: ['ruby', 'postgreSQL', 'RSpec'],
  },
];

const worksCard = cards.map(
  (card, index) => `
<section class="works ${index}">
<div class="work-card">
<img
  class="img"
  src="${card.imageM}"
  alt="SnapshootPortfolio02-img"
/>
<div class="align-center-text">
  <h3 class="work-heading ${index}">${card.title}</h3>
  <ul class="dev-date">
    <li class="canopy">CALCULATOR</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Front End Dev</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2022</li>
  </ul>
  <p class="works-content-p">
  ${card.cardDescription}
  </p>
  <ul class="badges">
  ${card.languages
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
  </ul>
  <button class="btn" onclick="showPop(${card.id})"> See Project </button>
</div>
</div>
</section>
`,
);



const workCard = document.querySelector('.works');
workCard.innerHTML += worksCard;

const modalCard = [
  {
    id: 1,
    title: 'Meals DB',
    imageM: './images/Recipe-App.png',
    imageD: '.images/Recipe-App.png',
    heading2: ['Meals', 'Front End Dev', '2022'],
    cardDescriptionD:
      "This app is built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.",
    cardDescriptionM:
      "This app is built using an API to access great recipes for people that love to cook. This is aimed at making it easier to store the recipes online and not have to keep a shelf full of recipe books.",
    languagesD: ['html', 'css', 'javascript'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://imaginative-bunny-380575.netlify.app/',
    linkSource: 'https://github.com/TechnoAndy/Meals-DB',
  },
  {
    id: 2,
    title: 'Math Magicians',
    imageM: './images/Math-magicians.png',
    imageD: './images/Math-magicians.png',
    heading2: ['Calculator', 'Front End Dev', '2022'],
    cardDescriptionD:
      "This is a front-end mobile application that performs calculations for its users. This app allows individuals to enter mathematical equations and receive an immediate answer. It includes features such as basic arithmetic functions, scientific calculations, and a user-friendly interface for ease of use.",
    cardDescriptionM:
      "This is a front-end mobile application that performs calculations for its users. This app allows individuals to enter mathematical equations and receive an immediate answer. It includes features such as basic arithmetic functions, scientific calculations, and a user-friendly interface for ease of use.",
    languagesD: ['html', 'css', 'javascript'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://math-magicians-648245.netlify.app',
    linkSource: 'https://github.com/TechnoAndy/math-magicians',
  },
  {
    id: 3,
    title: 'Seminar',
    imageM: './images/Seminar.png',
    imageD: './images/Seminar.png',
    heading2: ['Seminar', 'Front End Dev', '2022'],
    cardDescriptionD:
      "This is an app where a user can book a seat at a seminar, information about feature speakers and the program is available.",
    cardDescriptionM:
      "This is an app where a user can book a seat at a seminar, information about feature speakers and the program is available.",
    languagesD: ['html', 'css', 'react'],
    languagesM: ['html', 'css', 'react'],
    linkLive: 'https://technoandy.github.io/Capstone-Project-Module-1/',
    linkSource: 'https://github.com/TechnoAndy/Capstone-Project-Module-1',
  },
  {
    id: 4,
    title: 'Rails Recipe App',
    imageM: './images/Seminar.png',
    imageD: './images/Seminar.png',
    heading2: ['Recipe', 'back End Dev', '2022'],
    cardDescriptionD:
      "The Recipe app keeps track of all your recipes, ingredients, and inventory. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app allows you to make them public so anyone can access them.",
    cardDescriptionM:
      "The Recipe app keeps track of all your recipes, ingredients, and inventory. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app allows you to make them public so anyone can access them.",
    languagesD: ['ruby', 'postgreSQL', 'RSpec'],
    languagesM: ['ruby', 'postgreSQL', 'RSpec'],
    linkLive: 'https://technoandy.github.io/Capstone-Project-Module-1/',
    linkSource: 'https://github.com/TechnoAndy/Capstone-Project-Module-1',
  },
];

const modalCardDisplay = modalCard
  .map(
    (modeCard) => `

<div class="card-portfolio-1">

            <li class="pop-close"><i class="fa fa-times"></i></li>
                <h2 class="work-heading">${modeCard.title}</h2>
                <ul class="dev-date space-date">
                <li class="canopy">MEALS</li>
                <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Front End Dev</li>
                <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2022</li>
              </ul>
              <div class="images">
         <img class="forD-1" src="${modeCard.imageD}" alt="Pop Up Desktop" >
      <img class="forM-1" src="${modeCard.imageM}" alt="Pop Up Mobile" >

         </div>
      <div>
      <div class="row">
      <div class="column-left-1">
          <p class="forD-1">
              ${modeCard.cardDescriptionM}
          </p>
          <p class="forM-1">
              ${modeCard.cardDescriptionM}
          </p>

      </div>
      <div class="column-right-1">
          <ul class="modal-1">
              ${modeCard.languagesM
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
          </ul>
          <ul id="miss" class="miss modal-1">
          ${modeCard.languagesD
    .map((lang) => `<li class="works-badge">${lang}</li>`)
    .join('')}
          </ul>
          <hr>
          <ul class="modal-1">
              <li class="modal-3" href="${modeCard.linkLive}">See live <img class="btnimag" src="./images/seeliveIcon.png"></li>
              <li class="modal-3" href="${modeCard.linkSource}">See Source <i class="fa fa-github"></i></li>
          </ul>
      </div>
  </div>
      </div>
  </div>
`,
  ).join('');

const modalCards = document.getElementById('modal-cards');
modalCards.innerHTML += modalCardDisplay;
const boxModal = document.querySelector('.card-portfolio-1');
const openModal = document.querySelectorAll('.btn');

openModal.forEach((open) => {
  open.addEventListener('click', () => {
    boxModal.style.display = 'block';
    disableScroll();
  });
});

const popClose = document.querySelector('.pop-close');
popClose.addEventListener('click', () => {
  boxModal.style.display = 'none';
  body.style.filter = 'none';
  enableScroll();
});

// languages close toggle

const langArrowClick = document.querySelector('#arrow-up');
const langMenu = document.querySelector('#lang-menu');

langArrowClick.addEventListener('click', () => {
  langArrowClick.classList.toggle('anti-rotate');
  langMenu.classList.toggle('close-lang-menu');
});

// framework dropdown toggle

const framework = document.querySelector('#framework');
const frameworkMenu = document.querySelector('#framework-menu');

framework.addEventListener('click', () => {
  framework.classList.toggle('rotate');
  frameworkMenu.classList.toggle('open-framework-dropdown');
});

// skills dropdown toggle

const skills = document.querySelector('#skills-arrow');
const skillsMenu = document.querySelector('#skills-menu');

skills.addEventListener('click', () => {
  skills.classList.toggle('rotate');
  skillsMenu.classList.toggle('open-skills-dropdown');
});

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
