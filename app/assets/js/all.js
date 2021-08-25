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

const swiper2 = new Swiper('.swiper-container-project', {
  // loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
isMobile2();
window.addEventListener('resize', isMobile2);
function isMobile2(){
  if (document.documentElement.clientWidth > 767) {
    swiper2.changeDirection('horizontal');
  } else {
    swiper2.changeDirection('vertical');
  }
  // console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  // console.log(`clientHeight: ${document.documentElement.clientHeight}`);
}