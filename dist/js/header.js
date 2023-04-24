let headerMenu = document.querySelector('.header-menu');
let dropAll = document.querySelectorAll('.header-menu__drop');


// DROPDOWN MENU
headerMenu.onmouseover = function() {
	let target = event.target.closest('.header-menu__link');
	if(!target) return;
	dropAll.forEach(item=> {
		item.classList.remove('header-menu__drop--active');
	})
	let drop = target.parentNode.querySelector('.header-menu__drop');
	if(target.parentNode.contains(drop)) {
		drop.classList.add('header-menu__drop--active');
	}
}
headerMenu.onmouseleave = function() {
	dropAll.forEach(item=> {
		item.classList.remove('header-menu__drop--active');
	})
}


