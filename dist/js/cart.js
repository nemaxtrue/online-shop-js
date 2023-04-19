// // SELECTOR
// let productItems = document.querySelectorAll('.cart-products__item');
// let showCountTotal = document.querySelector('.cart__amount');
// let counters = document.querySelectorAll('.cart-item-info__count-input');
// let priceAll = document.querySelectorAll('.cart-item-info__price');

// // VARIABLE
// let min = 1;
// let max = 99;
// let priceTotal = 0;


// // LISTENER FOR EACH COUNTER
// productItems.forEach(item=> {
// 	let input = item.querySelector('.cart-item-info__count-input');
// 	let showPriceItem = item.querySelector('.cart-item-info__price');
// 	let showCountItem = item.querySelector('.cart-item-info__feature-current-count');
// 	let count = parseInt(input.value);
// 	const priceProduct = parseInt(showPriceItem.textContent);

// 	// CLICK LISTENER
// 	item.onclick = function(event) {
// 		let target = event.target;
// 		if(target.closest('.cart-item-info__count-minus')) minus();
// 		if(target.closest('.cart-item-info__count-plus')) plus();
// 		input.value = count;
// 		output(totalCount(), priceItemSum());
// 	}

// 	// MINUS
// 	function minus() {
// 		count--;
// 		if(count <= min) count = min;
// 	}

// 	// PLUS
// 	function plus() {
// 		count++;
// 		if(count >= max) count = max;
// 	}

// 	// COUNT TOTAL
// 	function totalCount() {
// 		let amount = 0;
// 		counters.forEach(item=> {
// 			amount += parseInt(item.value);
// 		})
// 		return amount;
// 	}

// 	// TOTAL PRICE
// 	function totalPrice() {
// 		priceAll.forEach(item=> {
// 		})
// 	}

// 	// PRICE ITEM
// 	function priceItemSum() {
// 		return priceProduct * count;
// 	}

// 	// OUTPUT
// 	function output(totalCount, priceItemSum) {
// 		showCountItem.textContent = count;
// 		showCountTotal.textContent = totalCount + ' шт';
// 		showPriceItem.textContent = priceItemSum + ' ₽';
// 	}

// 	// INIT
// 	function init() {
// 		output(totalCount(), priceItemSum(), totalPrice());
// 	}

// 	init();
// })







// -----------------------------------------------------------------------
// mobileFilterSort.addEventListener('click', function(event) {
// 	let target = event.target;
// 	if(target.closest('.mobile-filter__select-current')) {
// 		this.classList.toggle('mobile-filter__select--active');
// 	}

// 	if(target.closest('.mobile-filter__select-option')) {
// 		let option = target.closest('.mobile-filter__select-option');
// 		mobileFilterSortOptionAll.forEach(item=> {
// 			item.classList.remove('mobile-filter__select-option--active');
// 		})
// 		option.classList.add('mobile-filter__select-option--active');
// 		this.classList.remove('mobile-filter__select--active');
// 	}
// 	let currentOption = this.querySelector('.mobile-filter__select-option--active');
// 	this.querySelector('.mobile-filter__select-current').innerHTML = currentOption.innerHTML;
// })
