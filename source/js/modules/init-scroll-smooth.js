import {ScrollTrigger} from '../vendor/ScrollTrigger.min'
import {ScrollSmoother} from '../vendor/ScrollSmoother.min'
const initScrollSmooth = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.container-wrapper',
  });

};

window.initScrollSmooth = initScrollSmooth;

export {initScrollSmooth};
