const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,

  speed: 600,
  previousClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
        },
  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nex',
    prevEl: '.pre',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});