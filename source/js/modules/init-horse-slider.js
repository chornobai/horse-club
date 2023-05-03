const typeBlock = document.querySelector('.horses');


const initSliders = () => {
  const typeHorses = typeBlock.querySelector(' .swiper');
  const typeNext = typeBlock.querySelector('.horse-controls-next');
  const typePrev = typeBlock.querySelector('.horse-controls-prev');
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  const swiperHorse = new Swiper(typeHorses, {

    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: typeNext,
      prevEl: typePrev,
    },
    pagination: {
      el: '.horse-controls-pag',
      type: 'bullets',
    },

    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
          el: '.horse-controls-pag',
          type: 'progressbar',
        },
      },
      375: {
        slidesPerView: 2.07,
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
          el: '.horse-controls-pag',
          type: 'progressbar',
        },
      },
      480: {
        slidesPerView: 2.7,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: '.horse-controls-pag',
          type: 'progressbar',
        },

      },
      767: {
        slidesPerView: 3.2,
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
          el: '.horse-controls-pag',
          type: 'progressbar',
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,

        pagination: {
          el: '.horse-controls-pag',
          type: 'bullets',
        },



      },
    },
  });
};

const initHorseSlider = () => {
  if (typeBlock) {
    initSliders();
  }
};

window.initHorseSlider = initHorseSlider;

export {initHorseSlider};
