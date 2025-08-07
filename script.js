// Toggle navbar menu on mobile//
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
    navbarNav,classList.toggle('active');
});

// Close navbar when clicking outside//
window.addEventListener('click', function (e) {
   if (!navbarNav.contains (e.target) && !hamburger.contains(e.target)) {
     navbarNav.classList.remove('active');
   }
});