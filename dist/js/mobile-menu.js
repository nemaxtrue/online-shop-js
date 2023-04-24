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
	let item = target.closest('.submenu__item');
	let parent = target.closest('.submenu__parent-item');

	if(item) {
		item.classList.add('submenu__item--active');

	}
	if(parent) {
		item.classList.remove('submenu__item--active');

	}
}


