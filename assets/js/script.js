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

let bookSliderSwiper = new Swiper('.books-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});



let featuredSliderSwiper = new Swiper(".featured-slider", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});



let arrivalsSliderSwiper1 = new Swiper(".arrivals-slider-1", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
        1024: {
            slidesPerView: 3,
        },
    },
});



let arrivalsSliderSwiper2 = new Swiper(".arrivals-slider-2", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
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
        1024: {
            slidesPerView: 3,
        },
    },
});



let reviewsSliderSwiper = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});
