const petsItems1 = document.querySelectorAll('.slider__item'); // карточки с главной страницы
const petsItems2 = document.querySelectorAll('.pets__item'); // карточки со второй страницы
const petJSON = './assets/scripts/pets.json'; // инфа о питомцах
let modalWindow;

fetch(petJSON)
  .then(response => response.json())
  .then(data => {

    function generatePetModal() {
      let petName = this.children[1].textContent.toLowerCase();
      let petInfo = data.filter(elem => elem.name.toLowerCase() === petName)[0];
      // создание оверлэя
      modalWindow = document.createElement('div');
      modalWindow.classList.add('overlay');
      // создание контейнера модального окна
      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modal__container');
      // создание кнопки закрытия модального окна
      const closeButton = document.createElement('button');
      closeButton.classList.add('modal__close');
      closeButton.innerHTML = `
      <img src="./assets/icons/close.svg" alt="close-icon">
      `;
      // создание блока с контентом
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal__content');
      // создание фото животного
      const modalImg = document.createElement('img');
      modalImg.classList.add('modal__img');
      modalImg.src = petInfo.img;
      // создание блока основной инфы
      const modalInfo = document.createElement('div');
      modalInfo.classList.add('modal__info');
      // создание блока с именем
      const modalName = document.createElement('h3');
      modalName.classList.add('modal__name');
      modalName.textContent = petInfo.name;
      // создание блока с видом
      const modalKind = document.createElement('h4');
      modalKind.classList.add('modal__kind');
      modalKind.innerHTML = `${petInfo.type} - ${petInfo.breed}`
      // создание блока с текстом
      const modalDescr = document.createElement('p');
      modalDescr.classList.add('modal__descr');
      modalDescr.textContent = petInfo.description;
      // создание блока с возрастом
      const modalHelthState = document.createElement('ul');
      modalHelthState.innerHTML = `
      <li class="modal__age"><span class="modal__circle"></span><span>Age: </span> ${petInfo.age}</li>
      <li class="modal__inoc"><span class="modal__circle"></span><span>Inoculations: </span> ${petInfo.inoculations}</li>
      <li class="modal__diseases"><span class="modal__circle"></span><span>Diseases: </span> ${petInfo.diseases}</li>
      <li class="modal__parasites"><span class="modal__circle"></span><span>Parasites: </span> ${petInfo.parasites}</li>
      `
      //добавление элементов модального окна в DOM
      modalContainer.appendChild(closeButton);
      modalContainer.appendChild(modalContent);
      modalContent.appendChild(modalImg);
      modalContent.appendChild(modalInfo);
      modalInfo.appendChild(modalName);
      modalInfo.appendChild(modalKind);
      modalInfo.appendChild(modalDescr);
      modalInfo.appendChild(modalHelthState);
      modalWindow.append(modalContainer);
      document.querySelector('.wrapper').append(modalWindow);
      // запрещение прокрутки страницы под модальным окном
      document.body.style.overflow = 'hidden';
      modalWindow.addEventListener('click', closeOutsideModal)
      closeButton.addEventListener('click', () => {
        closeModalWindow()
      })
    }

    petsItems1.forEach(item => {
      item.addEventListener('click', generatePetModal)
    })
    petsItems2.forEach(item => {
      item.addEventListener('click', generatePetModal)
    })

    const closeModalWindow = () => {
      document.body.style.overflow = 'auto';
      modalWindow.remove();
    };
    
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModalWindow()
      }
    });
    
    function closeOutsideModal(event) {
      const modal = document.querySelector('.modal__content');
      const isClickInsideModal = modal.contains(event.target);
    
      if (!isClickInsideModal) {
        closeModalWindow();
      }
    }
  });
