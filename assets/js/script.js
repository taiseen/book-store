// 31 - Jan - 2022 

const searchBtn = document.getElementById('searchBtn');
const loginBtn = document.getElementById('loginBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');

const searchForm = document.querySelector('.searchForm');
const header2 = document.querySelector('.header-2');
const loginFormContainer = document.querySelector('.login-form-container');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('userClick');
});


loginBtn.addEventListener('click', () => {
    loginFormContainer.classList.add('userClick');
});
closeLoginBtn.addEventListener('click', () => {
    loginFormContainer.classList.remove('userClick');
});

window.addEventListener('scroll', () => {

    searchForm.classList.remove('userClick');

    if (window.scrollY > 80) {
        header2.classList.add('when-user-scrolling');
    } else {
        header2.classList.remove('when-user-scrolling');
    }

});


window.addEventListener('load', () => {

    if (window.scrollY > 80) {
        header2.classList.add('when-user-scrolling');
    } else {
        header2.classList.remove('when-user-scrolling');
    }

});


// swiper-slider functionality... 

let swiper = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

});