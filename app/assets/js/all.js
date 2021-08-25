console.log('Hello!');
const swiper = new Swiper('.swiper-container-recommend', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
});
const swiperTeacher = new Swiper('.swiper-container-teacher', {
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
window.addEventListener('resize', isMobile);
function isMobile(){
  try {
    if (document.documentElement.clientWidth > 767) {
      swiperTeacher.changeDirection('horizontal');
    } else {
      swiperTeacher.changeDirection('vertical');
    }
  } catch(e) {
  console.log(e.toString());  
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
  direction: 'horizontal',
});
// isMobile2();
// window.addEventListener('resize', isMobile2);
// function isMobile2(){
//   if (document.documentElement.clientWidth > 768) {
//     swiper2.changeDirection('horizontal');
//   } else {
//     swiper2.changeDirection('vertical');
//   }
// }

const swiper3 = new Swiper('.swiper-container-course', {
  // loop: true,
  slidesPerView: '4',
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 769px
    769: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
    }
  },
  autoplay: {
    delay: 2000,
  },
});

const swiper4 = new Swiper('.swiper-container-testimonials', {
  slidesPerView: '1',
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
    }
  },
  direction: 'horizontal',
});