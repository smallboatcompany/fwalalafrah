const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

function toggleMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});