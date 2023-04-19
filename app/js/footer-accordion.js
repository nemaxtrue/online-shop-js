const FOOTER = document.querySelector('.footer');

// ADD CLASS ACCORDION
if(window.innerWidth <= 428) {
	FOOTER.classList.add('footer-accordion');
}
else {
	FOOTER.classList.remove('footer-accordion');
}
window.addEventListener('resize', function(event) {
	if(window.innerWidth <= 428) {
		FOOTER.classList.add('footer-accordion');
	}
	else {
		FOOTER.classList.remove('footer-accordion');
	}
})


// ACCORDION
FOOTER.addEventListener('click', function(event) {
	let footerAccordion = document.querySelector('.footer-accordion');
	if(!footerAccordion) return;
	let target = event.target.closest('.footer-accordion__item');
	if(!target) return;
	let items = footerAccordion.querySelectorAll('.footer-accordion__item');
	items.forEach(item=> {
		let dropList = item.querySelector('.footer__list');
		if(item == target) {
			item.classList.toggle('footer-accordion__item--active');
		}
		else {
			item.classList.remove('footer-accordion__item--active');
		}

		if(item.classList.contains('footer-accordion__item--active')) {
			dropList.style.height = dropList.scrollHeight + 'px';
		}
		else {
			dropList.style.height = null;
		}
	})
})

