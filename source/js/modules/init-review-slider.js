

const reviewBlock = document.querySelector('.review');


const initSliders3 = () => {

  const reviewSlider = reviewBlock.querySelector(' .swiper');
  const reviewSliderNext = reviewBlock.querySelector('.review-controls-next');
  const reviewSliderPrev = reviewBlock.querySelector('.review-controls-prev');
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  const swiperHorse = new Swiper(reviewSlider, {

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: reviewSliderNext,
      prevEl: reviewSliderPrev,
    },
    pagination: {
      el: '.review-controls-pag',
      type: 'bullets',
    },


    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
          el: '.review-controls-pag',
          type: 'progressbar',
        },
      },
      479: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        pagination: {
          el: '.review-controls-pag',
          type: 'progressbar',
        },

      },
      780: {
        slidesPerView: 2,
        spaceBetween: 20,

      },
      1023: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        pagination: {
          el: '.review-controls-pag',
          type: 'progressbar',
        },
      },

      1279: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.review-controls-pag',
          type: 'bullets',
        },
      },

    },
  });
};

const initReviewSlider = () => {
  if (reviewBlock) {
    initSliders3();
  }

};

window.initReviewSlider = initReviewSlider;

export {initReviewSlider};
