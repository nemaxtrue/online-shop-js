// SLIDER NOVETLY
const heroSwiper = new Swiper('.hero__slider', {
	loop: true,
	slidesPerView: 1,
	speed: 600,
  	initialSlide: 0,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 4000,
	// }
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    	type: 'bullets',
  	},
});

// SLIDER CARESSSHOP 
const caressshopSwiper = new Swiper('.caressshop__slider', {
	loop: true,
	slidesPerView: 1.6,
  	spaceBetween: 20,
	speed: 600,
	centeredSlides: "auto",
	breakpoints: {
		500: {
			slidesPerView: 3,
		},
	    768: {
			centeredSlides: false,
			slidesPerView: 3
	    },
	    960: {
			centeredSlides: false,
			slidesPerView: 4,
	    }
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// autoplay: {
	// 	delay: 4000,
	// }
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    	type: 'bullets',
  	},
  	
});


const sneakersMobileSwiper = new Swiper('.sneakers-mobile__slider', {
	loop: true,
  	initialSlide: 1,
	pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    	type: 'bullets',
  	},
})

