document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.main_img_swiper', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    const pauseBtn = document.getElementById('swiperToggleBtn');
    let isPaused = false;

    pauseBtn.addEventListener('click', function () {
      if (!swiper.autoplay) {
        console.error('Swiper autoplay not available');
        return;
      }

      if (isPaused) {
        swiper.autoplay.start();
        pauseBtn.src = './imgs/pause-icon.svg';
        pauseBtn.alt = 'pause';
      } else {
        swiper.autoplay.stop();
      }

      isPaused = !isPaused;
    });
  });

  // Header scroll effect
  function updateHeaderOnScroll() {
  var header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
    $(".header_logo_text").addClass('hide');
    $(".header_logo_img").attr('src', './imgs/logo_header.png');
    $(".header_logo_img").addClass("scrolled-img");
  } else {
    header.classList.remove('scrolled');
    $(".header_logo_text").removeClass('hide');
    $(".header_logo_img").attr('src', './imgs/logo_img.svg');
    $(".header_logo_img").removeClass("scrolled-img");
  }
}

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll();


// var swiper = new Swiper('.image-slider', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },
//     slidesPerView: 3,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//         disableOnInteraction: false,
//     }
// });

// function updateSwiperParams() {
//     if (window.innerWidth < 431) {
//         swiper.params.slidesPerView = 1;
//     } else {
//         swiper.params.slidesPerView = 3;
//     }
//     swiper.update(); 
// }

// window.addEventListener('DOMContentLoaded', updateSwiperParams);
// window.addEventListener('resize', updateSwiperParams);
