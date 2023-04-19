let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-menu');


// TOGGLE BURGER AND MOBILE MENU
burger.onclick = function() {
	this.classList.toggle('burger--active');
	mobileMenu.classList.toggle('mobile-menu--active');
}

// MOBILE MENU SELECT ITEM
mobileMenu.onclick = function(event) {
	let target = event.target;
	if(target.closest('.mobile-menu__item')) {
		let item = target.closest('.mobile-menu__item');
		item.classList.add('mobile-menu__item--active');
	}
	if(target.closest('.mobile-menu__parent-item')) {
		let item = target.closest('.mobile-menu__item');
		item.classList.remove('mobile-menu__item--active');
	}
}


