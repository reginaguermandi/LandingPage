const menuBtn = document.getElementById('menu');
const menuLink = document.getElementById('menu-links');
const closeBtn = document.querySelector('.close');

menuBtn.onclick = () => {
    menuLink.classList.add('active');
    closeBtn.style.display = 'block';
};

closeBtn.onclick = () => {
    menuLink.classList.remove('active');
    closeBtn.style.display = 'none';
};