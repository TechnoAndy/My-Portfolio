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

// Validate contact form
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
    title: 'Tonic',
    imageM: './images/SnapshootPortfolio02.png',
    imageD: './images/SnapshootPortfolio02.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    imageM: './images/image2desktop.png',
    imageD: '.images/image2desktop.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    id: 3,
    title: 'Facebook 360',
    imageM: './images/image3desktop.png',
    imageD: '.images/image3desktop.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    id: 4,
    title: 'Uber Navigation',
    imageM: './images/image4desktop.png',
    imageD: '.images/image4desktop.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
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
    <li class="canopy">CANOPY</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Back End Dev</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2015</li>
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
    title: 'Tonic',
    imageM: './images/SnapshootPortfolio01.png',
    imageD: './images/SnapshootPortfolio02.png',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescriptionD:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    cardDescriptionM:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ",
    languagesD: ['github', 'ruby', 'Bootstrap'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://github.com/TechnoAndy/My-Portfolio',
    linkSource: 'https://TechnoAndy.github.io/Portfolio/',
  },
];

const modalCardDisplay = modalCard
  .map(
    (modeCard) => `

<div class="card-portfolio-1">

            <li class="pop-close"><i class="fa fa-times"></i></li>
                <h2 class="work-heading">${modeCard.title}</h2>
                <ul class="dev-date space-date">
                <li class="canopy">CANOPY</li>
                <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Back End Dev</li>
                <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2015</li>
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