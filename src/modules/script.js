// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider-main');
  const sliderNav = document.querySelector('.slider-nav');
  const sliderSchool = document.querySelector('.school-slider-main');
  const sliderSchoolNav = document.querySelector('.school-slider-nav');

  const swiper = new Swiper('.team-slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const teamSlider = new Swiper('.team__gallery-inner', {
    slidesPerView: 5,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      350: {
        slidesPerView: 1,
      },

      550: {
        slidesPerView: 2,
      },

      850: {
        slidesPerView: 3,
      },

      1250: {
        slidesPerView: 4,
      },

      1450: {
        slidesPerView: 5,
      },
    },
  });

  const offerSlider = new Swiper('.offer-slider', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },

      550: {
        slidesPerView: 2,
      },

      850: {
        slidesPerView: 3,
      },

      1250: {
        slidesPerView: 4,
      },
    },
  });

  const activitySlider = new Swiper('.activity-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let mySwiperNav = new Swiper(sliderNav, {
    slidesPerView: 5,
    spaceBetween: 10,
    loopedSlides: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  let mySwiper = new Swiper(slider, {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: mySwiperNav,
    },
  });

  let schoolNav = new Swiper(sliderSchoolNav, {
    spaceBetween: 8,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let school = new Swiper(sliderSchool, {
    thumbs: {
      swiper: schoolNav,
    },

    breakpoints: {
      250: {
        slidesPerView: 1.2,
        spaceBetween: 11,
      },

      768: {
        slidesPerView: 1,
      },
    },
  });

  const sliderMains = new Swiper('.main-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
});
