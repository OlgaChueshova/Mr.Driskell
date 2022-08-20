new Swiper('.swiperReviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  slidesPerView: 2,
 
  spaceBetween: 20,

  watchOverflow: true,

  // slidesPerGroup: 2,

  initialSlide: 2,

  breakpoints: {
   
    768: {
      slidesPerView: 1,
    },

  },

  
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