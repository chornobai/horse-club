const btnOpen = document.querySelectorAll('[data-open-modal]');
const modal = document.querySelector('[data-modal]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const modalForm = document.querySelector('.modal-form').querySelector('form');
const modalFromInput = modalForm.querySelectorAll('.custom-input');
const modalInputName = modalForm.querySelector("[name=name-modal]");
import {body} from '../init-navigation'



const initModals = () => {

  btnOpen.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('is-active');
      modalInputName.focus();
      body.classList.add('scroll-lock');
    });
  })


  //Закрытие модалки

  modalClose.forEach((close) => {
    close.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.remove('is-active');
      modalForm.reset();
      body.classList.remove('scroll-lock');
      modalFromInput.forEach((input) => {
        input.classList.remove('is-invalid', 'is-valid');
      })
    });
  })

  // Закрытие сообщения Esc

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      modal.classList.remove('is-active');
      modalForm.reset();
      body.classList.remove('scroll-lock');
      modalFromInput.forEach((input) => {
        input.classList.remove('is-invalid', 'is-valid');
      });

    }
  });
}


window.initModals = initModals;

export {initModals};
