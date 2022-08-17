const swiper = new Swiper('.swiperReviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  slideActiveClass: 'swiper-slide-active',
  // slideDublicateActiveClass: 'swiper-slide-duplicate-active',
  // watchOverflow: true,
  watchSlidesProgress: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});