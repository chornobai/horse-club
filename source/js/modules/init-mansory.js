import Masonry from '../vendor/masonry';

const initMansory = () => {

  const elem = document.querySelector('.trend__list');
  const msnry = new Masonry(elem, {

    itemSelector: '.trend__item',
    columnWidth: '.trend__item',
    horizontalOrder: true,
    gutter: 30,
    fitWidth: true,
  });


  const breakpoint = window.matchMedia(`(max-width: 1023px)`);
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      msnry.destroy();
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();


};

window.initMansory = initMansory;


export {initMansory};
