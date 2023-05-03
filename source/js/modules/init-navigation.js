const body = document.querySelector('body');
const header = body.querySelector('.header-wrapper');
const menuOn = header.querySelector('.header-nav__toggle');
const menuOff = header.querySelector('.header-nav__toggle-close');

const initNavigation = () => {
  menuOn.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.add('menu-open');
    body.classList.add('scroll-lock');
  });

  menuOff.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.remove('menu-open');
    body.classList.remove('scroll-lock');
  });
};

window.initNavigation = initNavigation;

export {body, initNavigation};
