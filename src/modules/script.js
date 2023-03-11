// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.team-slider', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const offerSlider = new Swiper('.offer-slider', {
        slidesPerView: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const teamSlider = new Swiper('.team__gallery-inner', {
        slidesPerView: 5,
        spaceBetween: 10,

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
            }
        }
    });

    let menuMain = document.querySelector('.header__bottom');
    let menuBtn = document.querySelector('.menu__btn');
    let close = document.querySelector('.menu__close');

    menuBtn.addEventListener('click', function () {
        menuMain.classList.add('active');
        close.classList.add('active');
    });

    close.addEventListener('click', function () {
        menuMain.classList.remove('active');
        close.classList.remove('active');
    });
})