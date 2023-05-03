import {body} from '../init-navigation'
const modalSuccess = document.querySelector('[data-modal-success]');
const modalCloseSuccess = document.querySelectorAll('[data-modal-close]');
const modalAppointment = document.querySelector('.modal--appointment');



const initModalsSuccess = () => {


  modalSuccess.classList.add('is-active');
  body.classList.add('scroll-lock');
  if (modalAppointment.classList.contains('is-active')) {
    modalAppointment.classList.remove('is-active');
  }


  //Закрытие модалки

  modalCloseSuccess.forEach((close) => {
    close.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalSuccess.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    });
  })

  // Закрытие сообщения Esc

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      modalSuccess.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    }
  });
}


window.initModalsSuccess = initModalsSuccess;

export {initModalsSuccess};
