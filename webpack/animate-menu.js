function toggleMenu() {
  const menu = document.getElementById('header');
  menu.classList.toggle('hamburger-menu--active');
  document.body.classList.toggle('fixed-body');
}

const menu = document.getElementById('hamburger-menu');
menu.addEventListener('click', toggleMenu);

