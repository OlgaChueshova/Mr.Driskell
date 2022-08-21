new Swiper('.slider-categories-mobile', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoHeight: false,

    slidesPerView: 8,

    spaceBetween: 20,

    slidesPerColumn: 2,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});