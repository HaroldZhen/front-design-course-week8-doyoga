"use strict";

$(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
  $(".loader").loaders();
  $('body').css('overflow', 'hidden');
  setTimeout(function () {
    $('body').css('overflow', 'auto');
    $(".loading").fadeOut(600);
  }, 1200);
});
AOS.init();
var elem = document.getElementById('reservationDate');

if (!!elem) {
  new Datepicker(elem, {
    orientation: 'bottom'
  });
} // surroundings 課程推薦


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
    1200: {
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

function socialAlert(e) {
  e.preventDefault();
  Swal.fire({
    icon: 'info',
    title: '即將開放' // text: '123',

  });
}

function subscriptionMsg(e) {
  e.preventDefault();
  var suscriptionBtn = document.getElementById('btnSubscription');
  suscriptionBtn.value = '';
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '感謝你的訂閱',
    text: '我們將定期寄送活動資訊給你',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function issueMsg(e) {
  e.preventDefault();
  var issueNameInput = document.getElementById('issueNameInput');
  var issueEmailInput = document.getElementById('issueEmailInput');
  var issuePhoneInput = document.getElementById('issuePhoneInput');
  var issueFeedbackInput = document.getElementById('issueFeedbackInput');
  issueNameInput.value = '';
  issueEmailInput.value = '';
  issuePhoneInput.value = '';
  issueFeedbackInput.value = '';
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '感謝你的訊息',
    text: '我們將盡快回覆你',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function searchMsg(e) {
  e.preventDefault();
  var searchInput = document.getElementById('searchInput');
  searchInput.value = '';
  var timerInterval;
  Swal.fire({
    title: '搜尋中',
    html: '還有 <b></b> 秒',
    timer: 2000,
    timerProgressBar: true,
    didOpen: function didOpen() {
      Swal.showLoading();
      var b = Swal.getHtmlContainer().querySelector('b');
      timerInterval = setInterval(function () {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: function willClose() {
      clearInterval(timerInterval);
    }
  }).then(function (result) {
    if (result.dismiss === Swal.DismissReason.timer) {
      searchResult();
    }
  });
}

function searchResult() {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: '沒有找到相關課程',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}
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
