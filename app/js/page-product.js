let sliderAll           = document.querySelectorAll('.swiper');
let tabs                = document.querySelectorAll('.tabs');


// SLIDER DOUBLE
const sliderVertical = new Swiper('.double-slider__vertical', {
  observer: true,
  observeParents: true,
  direction: 'vertical',
  loop: true,
  loopedSlides: 4,
  spaceBetween: 20,
  slideToClickedSlide: true,
  slidesPerView: 3,
  autoHeight: true,
  breakpoints: {
    700: {
      direction: 'vertical',
    },
    769: {
      direction: 'horizontal',
    },
    1024: {
      direction: 'vertical',
    }
  }
});

const sliderHorizontal = new Swiper('.double-slider__horizontal', {
  observer: true,
  observeParents: true,
  loop: true,
  loopedSlides: 4,
  zoom: true,
  // spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // thumbs: {
  //   swiper: sliderVertical
  // }
});


// COMBINE SLIDERS
sliderHorizontal.controller.control = sliderVertical;
sliderVertical.controller.control = sliderHorizontal;


// SIMILAR PRODUCT SLIDER
const similarSlider = new Swiper('.similar-product .swiper', {
  loop: true,
  // slidesPerView: 3,
  slidesPerView: 1.6,
  spaceBetween: 20,
  watchSlidesProgress: true,
  centeredSlides: "auto",
  // allowTouchMove: false,
  loopedSlides: 4,
  navigation: {
    nextEl: '.similar-product .swiper-button-next',
    prevEl: '.similar-product .swiper-button-prev',
  },
  pagination: {
    el: '.similar-product .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    430: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    540: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
      centeredSlides: false,
    }

  },
});


// RECENTLY WATCHED SLIDER
const recentlyWatchedSlider = new Swiper('.recently-watched .swiper', {
  loop: true,
  // slidesPerView: 3,
  slidesPerView: 1.6,
  spaceBetween: 20,
  watchSlidesProgress: true,
  centeredSlides: "auto",
  // allowTouchMove: false,
  loopedSlides: 4,
  navigation: {
    nextEl: '.recently-watched .swiper-button-next',
    prevEl: '.recently-watched .swiper-button-prev',
  },
  pagination: {
    el: '.recently-watched .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    430: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    540: {
      centeredSlides: false,
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
      centeredSlides: false,
    }

  },
});


// MOBILE PRODUCT SLIDER
const mobileProductSlider = new Swiper('.mobile-product-slider .swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.mobile-product-slider .swiper-button-next',
    prevEl: '.mobile-product-slider .swiper-button-prev',
  },
  pagination: {
    el: '.mobile-product-slider .swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});



// TABS 
tabs.forEach(item=> {
  item.onclick = function(event) {
    let target = event.target.closest('.tab');
    if(!target) return;
    target.parentNode.querySelectorAll('.tab--active').forEach(item=> {
      item.classList.remove('tab--active');
    });
    target.classList.add('tab--active');
  }
})



// ZOOM IMG
let zoomSlides = document.querySelectorAll('.double-slider__horizontal-slide');

zoomSlides.forEach(item=> {
  item.addEventListener('mousemove', function(event) {
    zoomImg = item.querySelector('img');
    let x = event.offsetX;                
    let y = event.offsetY;                
       
    let w = item.offsetWidth;              
    let h = item.offsetHeight;             

    let percentX = 100 / (w / x);           
    let percentY = 100 / (h / y);
   
    zoomImg.style.transform = `translate(-${percentX}%, -${percentY}%) scale(2)`;   //set same position but as a percent, and zoom in 2
  })
   item.addEventListener("mouseleave",function() {
    zoomImg.style.transform = 'translate(-50%,-50%) scale(1)';                      // default position and scale
  })
})






// 7. ITEM FAVORITE
sliderAll.forEach(item=> {
  item.onclick = function() {
    let target = event.target.closest('.favorite-btn');
    if(!target) return;
    let img = target.querySelector('img');
    if(img.src.indexOf('img/favorite-inactive.svg') !== -1) {
      img.src = 'img/favorite-active.svg';
    }
    else img.src = 'img/favorite-inactive.svg';
  }
})






