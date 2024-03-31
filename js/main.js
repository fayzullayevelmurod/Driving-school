// Header menu
const menu = document.querySelector('.header-modal');
const openMenu = document.querySelector('.header-bars');
const closeMenu = document.querySelector('.header__modal-close');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});


// Header select active
const selectBtn = document.querySelector('.header__select-btn');
const selectTabs = document.querySelectorAll('.header__select-tabs .header__select-tab');

selectBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    document.querySelector('.header__select-tabs').classList.toggle('active');
});

selectTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        selectTabs.forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        document.querySelector('.header__select-spn').textContent = this.textContent;
        document.querySelector('.header__select-tabs').classList.remove('active');
    });
});


// Header modal
const headerItems = document.querySelectorAll('.header__modal-select');

headerItems.forEach((item, index) => {
    const headerItemsImg = item.querySelector('.header__modal-arrow');
    item.addEventListener('click', () =>{
        item.classList.toggle('active');
        headerItemsImg.classList.toggle('active');

        if (index > 0) {
            const prevItem = headerItems[index - 1];
            prevItem.classList.remove('active');
        }
    });
});



// Time tabs
let timeTabs = document.querySelectorAll('.install__time-tab');
let installTabs = document.querySelectorAll('.install-tab');
let installItems = document.querySelectorAll('.install__block-items');

timeTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function (e) {
        timeTabs.forEach(function (tab) {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
    })
});

// Install  tabs
installTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function (e) {
        installTabs.forEach(function (tab) {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        installItems.forEach(function (item, i) {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    })
});


// Video
document.querySelectorAll('.play-video').forEach(function(playButton) {
    playButton.addEventListener('click', function() {
        var video = this.parentElement.querySelector('.my-video');
        if (video.paused) {
            video.play();
            video.setAttribute('controls', 'controls');
        } else {
            video.pause();
            video.removeAttribute('controls');
        }
        this.style.display = 'none';
    });
});


// Cars slider
var carsSlider = new Swiper(".carsSlider", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        776: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20
        }
    }
});

// theory slider
var theorySlider = new Swiper(".theorySlider", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
     breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        776: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20
        }
    }
});

// football slider
var footballSlider = new Swiper(".footballSlider", {
    slidesPerView: 2.2,
    grabCursor: true,
    navigation: {
        nextEl: ".football-slider-arrow .swiper-button-next",
        prevEl: ".football-slider-arrow .swiper-button-prev",
    },
     breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        776: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20
        }
    }
});

// video slider
var videoSlider = new Swiper(".videoSlider", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".video__sec-arrow .swiper-button-next",
        prevEl: ".video__sec-arrow .swiper-button-prev",
    },
     breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        776: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 3.2,
            spaceBetween: 20
        }
    }
});



// Sign Modal
let homeLink = document.querySelector('.home-link');
let signModal = document.querySelector('.sign-modal-wrap .sign-modal');
let signClose = document.querySelector('.sign-modal-close');
let signModalBg = document.querySelector('.sign-modal-bg');

homeLink.addEventListener('click', (e) => {
    signModal.classList.toggle('active');
})
signClose.addEventListener('click', (e) => {
    signModal.classList.remove('active');
})
signModalBg.addEventListener('click', (e) => {
    signModal.classList.remove('active');
})

// Register modal
let headerModalBtn = document.querySelector('.header__modal-btn ');
let registerModal = document.querySelector('.register-modal-wrap');
let registerClose = document.querySelector('.register-modal-close');
let registerModalBg = document.querySelector('.register-modal-bg');

headerModalBtn.addEventListener('click', (e) => {
    registerModal.classList.add('active');
    signModal.classList.remove('active');
})
registerClose.addEventListener('click', (e) => {
    registerModal.classList.remove('active');
})
registerModalBg.addEventListener('click', (e) => {
    registerModal.classList.remove('active');
})