/* let button = document.querySelectorAll('.service__btn');
let garden = document.querySelectorAll('#garden');
let lawn = document.querySelector('#lawn');
let planting = document.querySelectorAll('#planting');

button.forEach(btn => {
  let count = 0;
  
  btn.addEventListener('click', () => {
    if (btn.textContent === 'Gardens') {
      btn.classList.toggle('active');
      garden.forEach(elem => {
        elem.classList.toggle('card__blur');
      })
    } else if (btn.textContent === 'Lawn') {
      btn.classList.toggle('active');
      lawn.classList.toggle('card__blur');
    } else {
      planting.forEach(elem => {
        btn.classList.toggle('active');
        elem.classList.toggle('card__blur');
      })
    }

    if(btn.classList.contains('active')) {
      
    }
  })
}) */