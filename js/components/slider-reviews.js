const swiper = new Swiper('.swiperReviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: !false,

  slidesPerView: 2,
 
  spaceBetween: 20,

  // watchOverflow: true,

  // slidesPerGroup: 2,



  slideActiveClass: 'swiper-slide-active',

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