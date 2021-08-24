console.log('Hello!');
const swiper = new Swiper('.swiper-container', {
  // loop: true,
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
isMobile();
window.addEventListener('resize', isMobile);
function isMobile(){
  if (document.documentElement.clientWidth > 767) {
    swiper.changeDirection('horizontal');
  } else {
    swiper.changeDirection('vertical');
  }
  // console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  // console.log(`clientHeight: ${document.documentElement.clientHeight}`);
}