
let setPriceAll = document.querySelectorAll('.set-price');
let mobileFilterPrice = document.querySelector('.mobile-filter-popup__selected-price');


setPriceAll.forEach(item=> {
	let thumbFrom = item.querySelector('.set-price__range-thumb-min');
	let thumbTo = item.querySelector('.set-price__range-thumb-max');
	let progress = item.querySelector('.set-price__range-progress');

	let valRangeFrom = item.querySelector('.set-price__range-input-min');
	let valRangeTo = item.querySelector('.set-price__range-input-max');

	let inputFieldFrom = item.querySelector('.set-price__input-min');
	let inputFieldTo = item.querySelector('.set-price__input-max');

	let min = 99;
	let max = 150000;
	let gap = 5000;

	valRangeFrom.min = min;
	valRangeFrom.max = max;

	valRangeTo.min = min;
	valRangeTo.max = max;

	valRangeTo.value = max;
	valRangeFrom.value = min;

	valRangeFrom.addEventListener('input', setValFrom);
	valRangeTo.addEventListener('input', setValTo);
	inputFieldFrom.addEventListener('focus', inputFrom);
	inputFieldTo.addEventListener('focus', inputTo);


	function getValFrom() {
		return parseInt(valRangeFrom.value);
	}
	function getValTo() {
		return parseInt(valRangeTo.value);
	}


	function setValFrom() {
		let val = Math.min(getValFrom(), getValTo() - gap);
		valRangeFrom.value = val;
		inputFieldFrom.value = (separate(val));
		setThumbFrom();
		if(mobileFilterPrice) clonePrice();
	}
	function setValTo() {
		let val = Math.max(getValFrom() + gap, getValTo());
		valRangeTo.value = val;
		inputFieldTo.value = (separate(val));
		setThumbTo();
		if(mobileFilterPrice) clonePrice();

	}

	function separate(val) {
		val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		return val;
	}
	function validate(val) {
		val = val.replace(/[\D\s]/g, '');
		return val;
	}


	function inputFrom() {
		this.oninput = function() {
			this.value = separate(validate(this.value));
		}
		this.onkeydown = function(event) {
			if(event.key == 'Enter') this.blur();
		}
		this.onblur = function() {
			valRangeFrom.value = validate(this.value);
			setValFrom();
		}
	}
	function inputTo() {
		this.oninput = function() {
			this.value = separate(validate(this.value));

		}
		this.onkeydown = function(event) {
			if(event.key == 'Enter') this.blur();
		}
		this.onblur = function() {
			valRangeTo.value = validate(this.value);
			setValTo();
		}
	}

	function setThumbFrom() {
		let percent = getValFrom() * (100 / max);
		thumbFrom.style.left = percent + '%';
		progress.style.left = percent + '%';
	}
	function setThumbTo() {
		let percent = 100 - getValTo() * (100 / max);
		thumbTo.style.right = percent + '%';
		progress.style.right = percent + '%';
	}

	setValFrom();
	setValTo();



	// THUMB HOVER EFFECT
	valRangeFrom.addEventListener('mouseenter', function() {
		thumbFrom.classList.add('set-price__range-thumb--hover');
	})
	valRangeFrom.addEventListener('mouseleave', function() {
		thumbFrom.classList.remove('set-price__range-thumb--hover');
	})
	valRangeTo.addEventListener('mouseenter', function() {
		thumbTo.classList.add('set-price__range-thumb--hover');
	})
	valRangeTo.addEventListener('mouseleave', function() {
		thumbTo.classList.remove('set-price__range-thumb--hover');
	})


	// CLONE PRICE
	function clonePrice() {
		let fromInner  = document.querySelector('.mobile-filter-popup__selected-price-from');
		let toInner  = document.querySelector('.mobile-filter-popup__selected-price-to');

		fromInner.innerHTML = getValFrom().toLocaleString();
		toInner.innerHTML = getValTo().toLocaleString();
	}

})
