// alert('Проверяющий, вам сообщение в консоли!');
 console.log(
  'Доброго времени суток, проверяющий! Для удобства предоставляю свою самооценку:\n'
)

const menuBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-menu');
const menuItem = document.querySelectorAll('.burger-menu__item');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});
menu.addEventListener('click', () => {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
});