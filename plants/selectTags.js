let serviceButtons = document.querySelectorAll('.service__btn');
let serviceCards = document.querySelectorAll('.card')
let activeButtons = [];

serviceButtons.forEach((btn) =>
  btn.addEventListener("click", () => btnClickHandler(btn))
);

function btnClickHandler(btn) {
  // тут мы добавляем активные кнопки в массив. Тоглаем класс.
  toggleBtnClass(btn);
  // дизейблим кнопок когда в массиве есть 2 активных кнопки
  toggleBtnDisable();
  // навешиваем на карточки блюр, если карточка НЕ содержит в своём classList хотя бы одну кнопку из массива активных кнопок (activeButtons)
  toggleCardVisibility();
}

function toggleBtnClass(btn) {
  const typeButton = btn.textContent.toLowerCase();

  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
    activeButtons = activeButtons.filter((type) => type !== typeButton);
  } else {
    btn.classList.add("active");
    activeButtons.push(typeButton);
  }
}
console.log(activeButtons)
function toggleBtnDisable() {
  switch (activeButtons.length) {
    case 2:
      serviceButtons.forEach((btn) => {
        if (!btn.classList.contains("active")) {
          btn.disabled = true;
        }
      });
      break;
    default:
      serviceButtons.forEach((btn) => {
        if (btn.getAttribute("disabled") !== null) {
          btn.disabled = false;
        }
      });
      break;
  }
}

function toggleCardVisibility() {
  serviceCards.forEach((card) => {
    if (activeButtons.length) {
      const isActiveCard = activeButtons.some((type) => { 
        return card.classList.contains(type)
      }
      );

      switch (isActiveCard) {
        case false:
          card.classList.add("card__blur");
          break;
        default:
          card.classList.remove("card__blur");
          break;
      }
    } else {
      card.classList.remove("card__blur");
    }
  });
}