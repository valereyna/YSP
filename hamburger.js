const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const bars = document.querySelectorAll('.bar');

hamburgerMenu.addEventListener('click', function() {
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    }
    else {
        sidebar.style.width = '100vw'
    }
    bars.forEach(bar => bar.classList.toggle('change'));
});