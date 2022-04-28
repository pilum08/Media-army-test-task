const sliderHero = $('.slider-hero__img').bxSlider({
    pager: false,
    controls: false,
});

$('.slider-hero__arrow-btn--left').click(e => {
    e.preventDefault();
    sliderHero.goToPrevSlide();
})
$('.slider-hero__arrow-btn--right').click(e => {
    e.preventDefault();
    sliderHero.goToNextSlide();
});

const sliderStocks = $('.slider-stocks__list').bxSlider({
    pager: false,
    controls: false
})
$('.slider-stocks__btn--left').click(e => {
    e.preventDefault();
    sliderStocks.goToPrevSlide();
})
$('.slider-stocks__btn--right').click(e => {
    e.preventDefault();
    sliderStocks.goToNextSlide();
});