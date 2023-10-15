// navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
})
