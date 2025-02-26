const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    header.classList.toggle('active'); // Toggle active class to show/hide menu
});