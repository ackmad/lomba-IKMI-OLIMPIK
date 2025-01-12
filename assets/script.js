const navbarToggle = document.getElementById('navbar-toggle');
const navMenus = document.getElementById('nav-menus');

navbarToggle.addEventListener('click', () => {
    navMenus.classList.toggle('active');
});
