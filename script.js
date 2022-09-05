const hamburger = document.querySelector('.bar');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
})

