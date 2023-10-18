let $ = document;

const hambergurBtn = $.getElementById('menu-btn');
const mobileMenu = $.getElementById('menu');

hambergurBtn.addEventListener('click', () => {
    hambergurBtn.classList.toggle('open');
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
});