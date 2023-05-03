import {body} from '../init-navigation';
const modalPhoto = document.querySelector('[data-modal-photo]');
const modalClosePhoto = document.querySelectorAll('[data-modal-close]');
const openModalPhoto = document.querySelectorAll('.client-picture');
let modalPhotoPath = modalPhoto.querySelector('img');




const initModalsPhoto = () => {

  openModalPhoto.forEach((photo) => {
    photo.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalPhoto.classList.add('is-active');
      body.classList.add('scroll-lock');
      let photoPath = photo.src;
      modalPhotoPath.src = photoPath;
    })
  })




  //Закрытие модалки

  modalClosePhoto.forEach((close) => {
    close.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalPhoto.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    });
  })

  // Закрытие сообщения Esc

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      modalPhoto.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    }
  });
}


window.initModalsPhoto = initModalsPhoto;

export {initModalsPhoto};
