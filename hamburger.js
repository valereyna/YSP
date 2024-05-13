const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const bars = document.querySelectorAll('.bar');
const content = document.querySelector('.contenr');

hamburgerMenu.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
    bars.forEach(bar => bar.classList.toggle('change'));
});