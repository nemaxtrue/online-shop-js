let DATA;
let productsContent = document.querySelector('.catalog-products__content');;


let currentTarget;
let filterItems 		= document.querySelectorAll('.catalog-filter__item');
let filterDrop 			= document.querySelector('.catalog-filter');
let filterClear 		= document.querySelector('.catalog-filter__clear-filter-btn');
let tabs 				= document.querySelectorAll('.tabs');
let tab 				= document.querySelectorAll('.tab');
let priceSortUpDown 	= document.querySelector('.toggle-price');
let favoriteItems     	= document.querySelectorAll('.product-item__favorite-btn');



// DROP FILTER
filterDrop.addEventListener('click', dropFilter);
function dropFilter(event) {
	let target = event.target.closest('.catalog-filter__btn');
	if(!target) return;

	function toggle() {
		target.parentNode.classList.toggle('catalog-filter__item--active');
	}
	if(currentTarget != target) {
		filterItems.forEach(item=> {
			item.classList.remove('catalog-filter__item--active');
		})
	}
	toggle();
	currentTarget = target;
}

// CLOSE FILTER
document.addEventListener('click', closeFilter);
function closeFilter() {
	let target = event.target.closest('.catalog-filter__item');
	if(target) return;
	filterItems.forEach(item=> {
		item.classList.remove('catalog-filter__item--active');
	})
}



// FILTER CLEAR 
let inputAll = document.querySelectorAll('input');
filterClear.onclick = function() {
	inputAll.forEach(item=> {
		item.checked = false;
	})
}


// TAB SELECT
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


// FILTER SORT PRICE 
let flagFilterPrice = true;
priceSortUpDown.addEventListener('click', function(event) {
	let target = event.target;

	if(flagFilterPrice) {
		target.classList.remove('toggle-price--down');
		target.classList.add('toggle-price--up');

	}
	else {
		target.classList.remove('toggle-price--up');
		target.classList.add('toggle-price--down');

	}
	flagFilterPrice = !flagFilterPrice;
})



// ITEM SLIDER 
let multiSliderContainers = document.querySelectorAll('.multiple-slider-container');
multiSliderContainers.forEach(item=> {
	

	let cards = item.querySelectorAll('.product-item__swiper');
	cards.forEach(item=> {
		new Swiper(item, {
			loop: true,
			observer: true,
			observeParents: true,
			
			navigation: {
				nextEl: item.parentNode.parentNode.querySelector('.swiper-button-next'),
				prevEl: item.parentNode.parentNode.querySelector('.swiper-button-prev'),
			}	
		})
	})
})


// ITEM FAVORITE
favoriteItems.forEach(item=> {
	item.onclick = function(event) {
		let img = this.querySelector('img');
		if(img.src.indexOf('img/favorite-inactive.svg') !== -1) {
			img.src = 'img/favorite-active.svg';
		}
		else img.src = 'img/favorite-inactive.svg';
	}
})


let catalogViewTabs = document.querySelector('.catalog__view-tabs');

catalogViewTabs.addEventListener('click', function() {
	let target = event.target;
	if(target.closest('.large')) {
		productsContent.classList.add('catalog-products__content--large');
		productsContent.classList.remove('catalog-products__content--small')
	}
	if(target.closest('.small')) {
		productsContent.classList.add('catalog-products__content--small');
		productsContent.classList.remove('catalog-products__content--large')
	}
})



