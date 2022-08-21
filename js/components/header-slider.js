new Swiper('.headerSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  

    // If we need pagination
    pagination: {
        el: '.header-slider__pagination',
        clickable: true,

    },

    // Navigation arrows
    navigation: {
        nextEl: '.header-slider__btn-next',
        prevEl: '.header-slider__btn-prev',
    },

  });