$('.menu__item--arrows').hover(() => {
    $('.drop-menu--hidden').removeClass('drop-menu--hidden');
}, () => {
    $('.drop-menu').addClass('drop-menu--hidden');
});