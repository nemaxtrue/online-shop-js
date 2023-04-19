let mobileFilterShow = document.querySelector('.mobile-filter__show');
let mobileFilterPopup = document.querySelector('.mobile-filter-popup');
let mobileFilterPopupItems = document.querySelectorAll('.mobile-filter-popup__item');
let rangePrice = document.querySelector('.mobile-filter-popup__item-price');



// MOBILE FILTER POPUP CLOSE 
let mobileFilterClose = document.querySelector('.mobile-filter-popup__close');
mobileFilterClose.onclick = function() {
	mobileFilterShow.classList.remove('mobile-filter__show--active');
	mobileFilterPopup.classList.remove('mobile-filter-popup--active');
}

// MOBILE FILTER APPLY 
let mobileFilterApply = document.querySelector('.mobile-filter-popup__btn-apply-main');
mobileFilterApply.onclick = function() {
	mobileFilterShow.classList.remove('mobile-filter__show--active');
	mobileFilterPopup.classList.remove('mobile-filter-popup--active');
}


// // MOBILE FILTER SORT
// let mobileFilterSort 			= document.querySelector('.mobile-filter__select');
// let mobileFilterSortOptionAll 	= document.querySelectorAll('.mobile-filter__select-option');


// //  MOBILE FILTER SORT SELECT
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


// MOBILE FILTER POPUP SELECT OPTION
mobileFilterShow.addEventListener('click', function(event) {
	this.classList.toggle('mobile-filter__show--active');
	mobileFilterPopup.classList.toggle('mobile-filter-popup--active');
})
mobileFilterPopup.addEventListener('click', function(event) {
	let target = event.target;
	if(target.closest('.mobile-filter-popup__item-caption')) {
		let item = target.closest('.mobile-filter-popup__item');
		item.classList.add('mobile-filter-popup__item--active');
	}
	if(target.closest('.mobile-filter-popup__selected-price')) {
		let item = target.closest('.mobile-filter-popup__item');
		item.classList.add('mobile-filter-popup__item--active');
	}
	if(target.closest('.mobile-filter-popup__parent-item')) {
		let item = target.closest('.mobile-filter-popup__item');
		item.classList.remove('mobile-filter-popup__item--active');
	}
	if(target.closest('.mobile-filter-popup__btn-apply')) {
		let item = target.closest('.mobile-filter-popup__item');
		item.classList.remove('mobile-filter-popup__item--active');
	}
})




// FILTER SELECT 

showSelectedOption();

let mobileFilter = document.querySelector('.mobile-filter');

mobileFilter.addEventListener('input', showSelectedOption);
mobileFilter.addEventListener('reset', function() {
	setTimeout(function() {
		showSelectedOption();
	}, 100);
});



function setIdInput() {
	mobileFilterPopupItems.forEach(item=> {
		let inputAll = item.querySelectorAll('.mobile-filter-popup__option-input');
		let countId = 0;
		if(inputAll) {
			inputAll.forEach(input=> {
				input.id = input.name + countId++;
			})
		}
	})
	
}
setIdInput();


function showSelectedOption() {
	mobileFilterPopupItems.forEach(item=> {
		let checkedAll = item.querySelectorAll('input[type=checkbox]:checked');
		let list = item.querySelector('.mobile-filter-popup__clone-checkbox-list');
		let checkedItem = ``;
		if(list) {
			checkedAll.forEach(input=> {
				checkedItem += `
					<div class="mobile-filter-popup__clone-checkbox-item ${input.name}">
	  					<label class="mobile-filter-popup__clone-checkbox-label" for="${input.id}">
	  	 					<span>${input.nextElementSibling.innerHTML}</span>
	  	 					<img class="mobile-filter-popup__clone-checkbox-close" src="img/filter-close-btn.svg" alt="">
	  	 				</label>
	  				</div>
				`;
			})
			list.innerHTML = checkedItem;
		}
	})
}



let filterClearMain = document.querySelector('.mobile-filter-popup__btn-reset-main');
filterClearMain.onclick = function() {
		mobileFilterPopupItems.forEach(item=> {
			let checkedAll = item.querySelectorAll('input[type=checkbox]:checked');
			if(checkedAll) {
				checkedAll.forEach(input=> {
					input.checked = false;
					showSelectedOption();
				})
			}

	})
}







