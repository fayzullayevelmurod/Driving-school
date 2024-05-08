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
const selectTabsBg = document.querySelector('.header__select-tabs-bg');

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

selectTabsBg.addEventListener('click', function () {
    selectBtn.classList.remove('active');
    document.querySelector('.header__select-tabs').classList.remove('active');
})

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
let installItems = document.querySelectorAll('.install-block');

function toggleActive(index) {
    timeTabs.forEach((tab, i) => tab.classList.toggle('active', i === index));
    installItems.forEach((item, i) => item.classList.toggle('active', i === index));
}
timeTabs.forEach((tab, index) => tab.addEventListener('click', () => toggleActive(index)));


let installTabs = document.querySelectorAll('.install-tabs');
installTabs.forEach(tab => {
    let innerTabs = tab.querySelectorAll('.install-tab');
    innerTabs.forEach(innerTab => {
        innerTab.addEventListener('click', function() {
            let activeTabs = tab.querySelectorAll('.install-tab.active');
            activeTabs.forEach(activeTab => {
                activeTab.classList.remove('active');
            });
            innerTab.classList.add('active');
        });
    });
});





// Video
let videoName = document.querySelectorAll('.review-video__name');
let playVideos = document.querySelectorAll('.play-video');
playVideos.forEach(function(playVideo, index) {
    playVideo.addEventListener('click', function() {
        let video = this.parentElement.querySelector('.my-video');
        let activePlayVideos = document.querySelectorAll('.play-video.active');
        activePlayVideos.forEach(function(activePlayVideo) {
            activePlayVideo.classList.remove('active');
        });
        let activeVideos = document.querySelectorAll('.my-video');
        activeVideos.forEach(function(activeVideo) {
            if (activeVideo !== video && !activeVideo.paused) {
                activeVideo.pause();
                activeVideo.removeAttribute('controls');
            }
        });
        if (video.paused) {
            video.play();
            video.setAttribute('controls', 'controls');
        } else {
            video.pause();
            video.removeAttribute('controls');
        }
        playVideo.classList.add('active');
        videoName[index].style.display = 'none';
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
        300: {
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
        300: {
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
        300: {
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
        300: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        370: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 2.2,
            spaceBetween: 20
        },
        470: {
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
let signOpenBtns = document.querySelectorAll('.sign-open-btn');
let signModal = document.querySelector('.sign-modal-wrap .sign-modal');
let signClose = document.querySelector('.sign-modal-close');
let signModalBg = document.querySelector('.sign-modal-bg');

signOpenBtns.forEach(function (signOpenBtn) {
    signOpenBtn.addEventListener('click', (e) => {
        signModal.classList.toggle('active');
    })
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


// Imask input

document.addEventListener('DOMContentLoaded', function () {
    let phoneInputs = document.querySelectorAll('.phone-inp');

    function applyMask(input) {
        let maskOptions = {
            mask: '+7 (000) 000-00-00',
            lazy: false
        };

        input.placeholder = 'Телефон';

        input.addEventListener('focus', function () {
            new IMask(input, maskOptions);
        });
    }

    phoneInputs.forEach(function (phoneInp) {
        applyMask(phoneInp);
    });
});