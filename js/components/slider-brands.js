new Swiper('.sliderBrands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoHeight: true,
  longSwipesMs: 900,

 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



new Swiper('.slider-in-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  nested: true,

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