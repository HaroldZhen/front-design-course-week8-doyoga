console.log('Hello!');
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2000,
  // },
  // direction: 'vertical',
});