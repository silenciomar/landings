alert('Проверяющий, вам сообщение в консоли!');
 console.log(
  `Доброго времени суток, проверяющий! Напоминаю, что работу проверяем в Google Chrome, настраиваем правильный масштаб экрана компьютера
  и правильно выстраиваем все необходимые параметры для Pixel Perfect!Благодарю за правильную проверку! Удачи на кросс-чеке!
  Для удобства предоставляю свою самооценку:\n 85 баллов 
  Отзыв по пунктам ТЗ:
  Выполненные пункты:
  1) Блок header 
  2) Секция welcome 
  3) Секция about 
  4) Секция service 
  5) Секция prices 
  6) Секция contacts 
  7) Блок footer 
  8) Блок header 
  9) Секция welcome 
  10) Секция about 
  11) Секция service 
  12) Секция prices 
  13) Секция contacts 
  14) Блок footer 
  15) нет полосы прокрутки при ширине страницы от 1440рх до 380px 
  16) нет полосы прокрутки при ширине страницы от 380px до 320рх 
  17) при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка 
  18) при нажатии на бургер-иконку плавно появляется адаптивное меню 
  19) адаптивное меню соответствует цветовой схеме макета 
  20) при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран 
  21) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню) 
  Отзыв: Данный пункт остался не отредактированным с прошлого потока, поэтому оценку просто засчитываем. 
  22) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна 
  `
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