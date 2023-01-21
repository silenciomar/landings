const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-menu');
const menuItem = document.querySelectorAll('.burger-menu__item');

// бургер-меню

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });
});