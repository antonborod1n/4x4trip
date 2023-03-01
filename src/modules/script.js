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