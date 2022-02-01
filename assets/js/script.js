// 31 - Jan - 2022 

const searchBtn = document.getElementById('searchBtn');
const loginBtn = document.getElementById('loginBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const colorPalette = document.getElementById('colorPalette');

const root = document.querySelector(':root');
const header2 = document.querySelector('.header-2');
const searchForm = document.querySelector('.searchForm');
const colorContainer = document.querySelector('.colorContainer');
const colorContainerBox = document.querySelectorAll('.colorBox ');
const loginFormContainer = document.querySelector('.login-form-container');
const loaderContainer = document.querySelector('.loader-container');


colorPalette.addEventListener('click', () => {

    colorContainer.classList.add('userClick');

    colorContainerBox.forEach(color => {

        color.addEventListener('click', () => {

            let clickColor = color.getAttribute('data-color');
            root.style.setProperty('--green', clickColor);
            colorContainer.classList.remove('userClick');

        });
    });
});

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
    colorContainer.classList.remove('userClick');

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

    loader();
});


const loader = () => {
    setTimeout(() => {
        loaderContainer.classList.add('loadingGif');
    }, 4000);
}





// DISABLE the RIGHT CLICK for viewing the ==> View Page Source Code
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);


// DISABLE SHORTCUT KEY
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.keyCode==123) {
        e.stopPropagation();
        e.preventDefault();
    }
}, false);






// swiper-slider functionality... 

let book = new Swiper('.books-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
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



let featured = new Swiper(".featured-slider", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
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



let arrivals1 = new Swiper(".arrivals-slider-1", {
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



let arrivals2 = new Swiper(".arrivals-slider-2", {
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



let reviews = new Swiper('.reviews-slider', {

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


let blogs = new Swiper(".blogs-slider", {
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
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
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});
