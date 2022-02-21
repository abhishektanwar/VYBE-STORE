// navbar responsive
const myNav = document.querySelector('#my-nav-bar');
const hamburgerMenuBtn = document.querySelector('#hamburger-menu-icon');
const closeMobileNavBtn = document.querySelector('#close-mobile-nav');

hamburgerMenuBtn.addEventListener('click', (e) => {
    console.log("ham clicked")
	myNav.classList.toggle('active');
});

closeMobileNavBtn.addEventListener('click', (e) => {
	myNav.classList.remove('active');
});