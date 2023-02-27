document.addEventListener('DOMContentLoaded', function () {
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