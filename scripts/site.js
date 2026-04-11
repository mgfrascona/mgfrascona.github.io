const key = "It's a secret to everybody."
localStorage.setItem(key, JSON.stringify('Hello, World!'))

const hamburgerIcon = document.querySelector('.hamburgerIcon');
const navMenu = document.querySelector('nav ul');

if (window.innerWidth < 768) {
    hamburgerIcon.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
} else {
        navMenu.style.display = 'flex';
}