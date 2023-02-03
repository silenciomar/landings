let btn = document.querySelector('.dropdown__btn');
let items = document.querySelectorAll('.dropdown__item')
let dropdownWindow = document.querySelector('.dropdown__content');
let cityNames = document.querySelectorAll('.dropdown__city')
let dropdownIcon = document.querySelector('.dropdown__icon');

let dropdownCard = document.querySelectorAll('.card-dropdown')

btn.addEventListener('click', () => {
  btn.classList.add('active')
  dropdownWindow.classList.add('active')
  dropdownIcon.classList.add('active')
})

items.forEach(item => {
  item.addEventListener('click', ()=> {
    document.getElementById('dropdown__title').textContent = item.textContent
    if(dropdownWindow.classList.contains('active')) {
      dropdownWindow.classList.remove('active')
    }
    if(dropdownIcon.classList.contains('active')) {
      dropdownIcon.classList.remove('active')
    }
    if(item.textContent.trim() === 'Canandaigua, NY') {
      dropdownCard[0].classList.add('active')
      dropdownCard[1].classList.remove('active')
      dropdownCard[2].classList.remove('active')
      dropdownCard[3].classList.remove('active')
    } else if (item.textContent.trim() === 'New York City') {
      dropdownCard[0].classList.remove('active')
      dropdownCard[1].classList.add('active')
      dropdownCard[2].classList.remove('active')
      dropdownCard[3].classList.remove('active')
    } else if (item.textContent.trim() === 'Yonkers, NY') {
      dropdownCard[0].classList.remove('active')
      dropdownCard[1].classList.remove('active')
      dropdownCard[2].classList.add('active')
      dropdownCard[3].classList.remove('active')
    } else {
      dropdownCard[0].classList.remove('active')
      dropdownCard[1].classList.remove('active')
      dropdownCard[2].classList.remove('active')
      dropdownCard[3].classList.add('active')
    }
  })
})