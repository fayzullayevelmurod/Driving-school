
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

// football slider
var footballSlider = new Swiper(".footballSlider", {
    slidesPerView: 2.2,
    grabCursor: true,
    navigation: {
        nextEl: ".football-slider-arrow .swiper-button-next",
        prevEl: ".football-slider-arrow .swiper-button-prev",
    },
});