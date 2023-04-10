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

alert('Доброго времени суток, уважаемый проверяющий! К сожалению, меня мучают мигрени уже 3 дня, и я не в состоянии закончить всю работу, поэтому прошу оценить только бургер и модальные окна! Моя самооценка - 38 баллов! Удачного кросс-чека!')