let promoCodeBtn = document.querySelector('.promo-code__btn');

promoCodeBtn.addEventListener('click', function(e) {
	let promoCode = this.closest('.promo-code');
	let input = promoCode.querySelector('.promo-code__input');

	if(input.value.trim() == '') {
		input.classList.add('wrong');
		input.value = '';
		input.addEventListener('animationend', function(e) {
			input.classList.remove('wrong');
		})
	}
	else {
		promoCode.classList.toggle('active');
		this.classList.toggle('active');

		if(promoCode.classList.contains('active')) {
			this.innerHTML = 'Удалить';
			input.value = input.value.trim();
			input.disabled = true;

		}
		else {
			this.innerHTML = 'Добавить';
			input.value = '';
			input.disabled = false;
		}
	}
})

