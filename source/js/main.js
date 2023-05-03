import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

import {initFormValidate} from './modules/form/init-form-validate';
import {initClientSlider} from './modules/init-client-slider';
import {initHorseSlider} from './modules/init-horse-slider';
import {initReviewSlider} from './modules/init-review-slider';

import {initNavigation} from './modules/init-navigation';
import {initModalsPhoto} from './modules/modals/init-modal-photo';
import {initReview} from './modules/init-review';
import {initModalReview} from './modules/modals/init-modal-review';
import {mapApi} from './modules/map';

import {initMansory} from './modules/init-mansory';
import {widthSlider} from './utils/width-slider';
import {initScrollSmooth} from './modules/init-scroll-smooth';



// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initClientSlider();
  initHorseSlider();
  initReviewSlider();
  initMansory();
  initNavigation();
  initReview();
  mapApi();
  widthSlider();
  initScrollSmooth();

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initFormValidate();
    initModalsPhoto();
    initModalReview();

  });
});

