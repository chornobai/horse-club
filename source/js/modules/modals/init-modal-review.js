import {body} from '../init-navigation';

const initModalReview = () => {

  const reviewCard = document.querySelectorAll('.review-item');
  const reviewModal = document.querySelector('[data-modal-review]');
  const reviewModalClose = document.querySelectorAll('[data-modal-close]');
  const reviewModalText = reviewModal.querySelector('p');
  const reviewImg = reviewModal.querySelector('img');
  const reviewModalName = reviewModal.querySelector('.review-modal-info').querySelector('p');

  reviewCard.forEach((el) => {
    const reviewBtn = el.querySelector('.review-btn');
    let reviewText = el.querySelector('.review-item__describe').querySelector('p');
    let reviewImgCard = el.querySelector('img');
    let reviewCardName = el.querySelector('.review-info-left').querySelector('p');


    if (reviewBtn) {
      reviewBtn.addEventListener('click', (evt) => {
        evt.preventDefault();


        reviewModal.classList.add('is-active');
        body.classList.add('scroll-lock');
        reviewModalText.textContent = reviewText.textContent;
        reviewImg.src = reviewImgCard.src;
        reviewImg.width = reviewImgCard.width;
        reviewImg.height = reviewImgCard.height;
        reviewImg.altText = reviewImgCard.altText;
        reviewModalName.textContent = reviewCardName.textContent;

      })
    }



  })

  //Закрытие модалки

  reviewModalClose.forEach((close) => {
    close.addEventListener('click', (evt) => {
      evt.preventDefault();
      reviewModal.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    });
  })

  // Закрытие сообщения Esc

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      reviewModal.classList.remove('is-active');
      body.classList.remove('scroll-lock');
    }
  });
}


window.initModalReview = initModalReview;

export {initModalReview};
