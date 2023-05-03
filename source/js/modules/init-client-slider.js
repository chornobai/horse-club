const clientBlock = document.querySelector('.clients');
import swiper from '../vendor/swiper';



const initSlider = () => {
  const clientSlider = clientBlock.querySelector('.swiper');
  const clientSliderNext = clientBlock.querySelector('.client-controls-next');
  const clientSliderPrev = clientBlock.querySelector('.client-controls-prev');
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  const swiper = new Swiper(clientSlider, {

    slidesPerView: 'auto',
    spaceBetween: 2,
    slidesPerColumn: 2,

    // slidesPerGroup: 2,
    autoHeight: false,

    grid: {
      rows: 2,
      fill: 'row',
    },

    navigation: {
      prevEl: clientSliderPrev,
      nextEl: clientSliderNext,

    },
    pagination: {
      el: '.client-controls-pag',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      320: {
        pagination: {
          el: '.client-controls-pag',
          type: 'progressbar',
        },
      },
      1024: {
        pagination: {
          el: '.client-controls-pag',
          clickable: true,
          type: 'bullets',
        },
      },
    },
  });
};

const initClientSlider = () => {
  if (clientBlock) {
    initSlider();
  }
};

window.initClientSlider = initClientSlider;

export {initClientSlider};
