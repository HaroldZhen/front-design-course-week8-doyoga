"use strict";

AOS.init(); // surroundings 課程推薦

var swiper = new Swiper('.swiper-container-recommend', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  }
}); // course 師資介紹

var swiperTeacher = new Swiper('.swiper-container-teacher', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2000
  }
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
} // reservation -choose 選擇課程階級


var swiper2 = new Swiper('.swiper-container-project', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  direction: 'horizontal'
}); // index 精心設計、課程多元

var swiper3 = new Swiper('.swiper-container-course', {
  slidesPerView: '4',
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 769px
    769: {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 2000
  }
}); // index 聽聽他們怎麼說

var swiper4 = new Swiper('.swiper-container-testimonials', {
  slidesPerView: '1',
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2
    }
  },
  direction: 'horizontal'
});
"use strict";

(function (d) {
  var config = {
    kitId: 'zma3hfb',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document);
//# sourceMappingURL=all.js.map
