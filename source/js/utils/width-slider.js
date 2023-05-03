const widthSlider = () => {

  const sliders = document.querySelectorAll('.swiper-slide.client__swiper-item');
  sliders.forEach((slide) => {
    // const resizeWidth = () => {
    let sliderWidth = getComputedStyle(slide).getPropertyValue('width');

    let widthNum = Number.parseInt(sliderWidth);
    // let widthResize = widthNum * 0.9;
    // slide.style.width = widthResize + 'px';
    // }

    const breakpoint = window.matchMedia(`(max-width: 1023px)`);
    const breakpoint2 = window.matchMedia(`(max-width: 767px)`);
    const breakpoint3 = window.matchMedia(`(max-width: 479px)`);
    const breakpoint4 = window.matchMedia(`(max-width: 375px)`);
    const breakpointChecker = () => {
      let widthResize = widthNum;
      if (breakpoint.matches) {
        widthResize = widthNum * 0.645;
        slide.style.width = widthResize + 'px';
      } else {
        // widthResize = widthResize / 0.645;
        slide.style.width = widthResize + 'px';
      }
      if (breakpoint2.matches) {
        widthResize = widthNum * 0.495;
        slide.style.width = widthResize + 'px';

      }
      if (breakpoint3.matches) {
        widthResize = widthNum * 0.4063;
        slide.style.width = widthResize + 'px';

      }
      if (breakpoint4.matches) {
        widthResize = widthNum * 0.3872;
        slide.style.width = widthResize + 'px';

      }
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
    breakpoint2.addListener(breakpointChecker);
    breakpointChecker();
    breakpoint3.addListener(breakpointChecker);
    breakpointChecker();
    breakpoint4.addListener(breakpointChecker);
    breakpointChecker();

    // window.addEventListener('resize', resizeWidth);

  });







  // const sliders = document.querySelectorAll('.swiper-slide.client__swiper-item');

  // sliders.forEach((slide) => {

  //   let sliderWidth = getComputedStyle(slide).getPropertyValue('width');

  //   slide.style.setProperty('--sliderWidth', `${sliderWidth}`);

  // });
};

window.widthSlider = widthSlider;
export {widthSlider};
