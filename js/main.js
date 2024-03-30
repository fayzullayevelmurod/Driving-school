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
const headerItems = document.querySelectorAll('.header__modal-item');

headerItems.forEach(item => {
    const optionTexts = item.querySelectorAll('.header__modal-option span');

    optionTexts.forEach(optionText => {
        optionText.addEventListener('click', function() {
            const selectSpan = document.querySelector('.header__modal-select span');
            selectSpan.textContent = this.textContent;
        });
    });
});




// Install active
let timeTabs = document.querySelectorAll('.install__time-tab');
let installTabs = document.querySelectorAll('.install-tab');
let installItems = document.querySelectorAll('.install__block-items');

// Time tabs
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
            video.setAttribute('controls', 'controls'); // controls qo'shamiz
        } else {
            video.pause();
            video.removeAttribute('controls'); // controlsni olib tashlaymiz
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
});

// football slider
var footballSlider = new Swiper(".footballSlider", {
    slidesPerView: 2.2,
    grabCursor: true,
    navigation: {
        nextEl: ".football-slider-arrow .swiper-button-next",
        prevEl: ".football-slider-arrow .swiper-button-prev",
    },
});

// video slider
var videoSlider = new Swiper(".videoSlider", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".video__sec-arrow .swiper-button-next",
        prevEl: ".video__sec-arrow .swiper-button-prev",
    },
});