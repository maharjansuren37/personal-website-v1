const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', function() {
    if (!nav.classList.contains('show')) {
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
    }
})