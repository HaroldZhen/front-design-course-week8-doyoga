$(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  $(".loader").loaders();
  $('body').css('overflow', 'hidden');
  setTimeout(function () {
    $('body').css('overflow', 'auto');
    $(".loading").fadeOut(600);
  }, 1200);
});

AOS.init();
const elem = document.getElementById('reservationDate');
if (!!elem) {
  new Datepicker(elem, {
    orientation: 'bottom',
  });
}

// surroundings 課程推薦
const swiper = new Swiper('.swiper-container-recommend', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
  },
});
// course 師資介紹
const swiperTeacher = new Swiper('.swiper-container-teacher', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
window.addEventListener('resize', isMobile);

function isMobile() {
  try {
    if (document.documentElement.clientWidth > 767) {
      swiperTeacher.changeDirection('horizontal');
    } else {
      swiperTeacher.changeDirection('vertical');
    }
  } catch (e) {
    console.log(e.toString());
  }
}
// reservation -choose 選擇課程階級
const swiper2 = new Swiper('.swiper-container-project', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: 'horizontal',
});
// index 精心設計、課程多元
const swiper3 = new Swiper('.swiper-container-course', {
  slidesPerView: '4',
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 769px
    1200: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
    }
  },
  autoplay: {
    delay: 2000,
  },
});
// index 聽聽他們怎麼說
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
const testimonialsLeft = document.querySelector('.js-testimonials-left');
const testimonialsRight = document.querySelector('.js-testimonials-right');
testimonialsLeft.addEventListener('click', function(e) {
  e.preventDefault();
  swiper4.slidePrev();
  testimonialsLeft.classList.add('text-secondary');
  testimonialsRight.classList.remove('text-secondary');
});
testimonialsRight.addEventListener('click', function(e) {
  e.preventDefault();
  swiper4.slideNext();
  testimonialsRight.classList.add('text-secondary');
  testimonialsLeft.classList.remove('text-secondary');
});