const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const bars = document.querySelectorAll('.bar');

hamburgerMenu.addEventListener('click', function() {
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
    bars.forEach(bar => bar.classList.toggle('change'));
});