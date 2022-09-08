// Mobile hamburger menu functionality
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

// Popup window functionality



const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML=  `
`;

window.open = document.querySelector('.btn');
open.addEventListener('click', () => {
	const main = document.createElement('div');
	main.className = 'main';
	const popup = document.createElement('div');
	popup.className = 'popup';
    popup.innerHTML = `
 <h1 class="work-heading">Tonic</h1>
  <ul class="dev-date">
    <li class="canopy">CANOPY</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;Back End Dev</li>
    <li class="bullet">&#9679;&nbsp;&nbsp;&nbsp;2015</li>
  </ul>
 <img class="img" src="images/SnapshootPortfoliopopupw.png" alt="" />
  <p class="works-content-p">
   A daily selection of privately personalized reads; no accounts
   or sign-ups required.
  </p>
   <ul class="badges">
    <li class="works-badge">html</li>
    <li class="works-badge">css</li>
    <li class="works-badge">javaScript</li>
   </ul>
   
   
    <button class="btn" type="button">See live&nbsp<img src="images/seeliveicon.png"/button >
    <button class="btn" type="button">See source&nbsp<img src="images/seesourceVector.png"/button >
    <button class="close" type="button">Close</button >

  
`;

	main.appendChild(popup);
	body.appendChild(main);

	window.close = document.querySelector('.close');
	close.addEventListerner('click', () => {
		body.removeChild(main);
		});

});



