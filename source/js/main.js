import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {startVideo} from './modules/play-video/play-video';
import {changePeriod, changeTariff} from './modules/tariff-toggle';
import {initTabs} from './modules/tabs/init-tabs';
import {sliderExpertsInit} from './modules/slider/slider-experts-init';
import {initAccordions} from './modules/accordion/init-accordion';
import {sliderReviewsInit} from './modules/slider/slider-reviews-init';
import {setCardsActive} from './modules/experts-cards-active';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    startVideo();
    changePeriod();
    changeTariff();
    initTabs();
    sliderExpertsInit();
    setCardsActive();
    initAccordions();
    sliderReviewsInit();
  });
});
