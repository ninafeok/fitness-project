import Swiper from '../../vendor/swiper';

let sliderReviews;
const prevButton = document.querySelector('[data-slider="prev-review"]');
const nextButton = document.querySelector('[data-slider="next-review"]');

const sliderReviewsInit = () => {
  sliderReviews = new Swiper('[data-slider="reviews-slider"]', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 800,
    centeredSlides: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    containerModifierClass: 'reviews__',
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      1366: {
        allowTouchMove: false,
      },
      0: {
        allowTouchMove: true,
      },
    },
  });
};

export {sliderReviewsInit, sliderReviews};
