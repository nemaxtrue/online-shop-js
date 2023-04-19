document.querySelectorAll('.select-drop').forEach(item=> {
	let dropBtn 		= item.querySelector('.select-drop__btn');
	let dropBtnText 	= item.querySelector('.select-drop__btn-text');
	let dropList 		= item.querySelector('.select-drop__list');
	let dropOptions 	= item.querySelectorAll('.select-drop__option');


	dropBtn.addEventListener('click', function(e) {
		dropList.classList.toggle('active');
		dropBtn.classList.toggle('active');
	})
	dropList.addEventListener('click', function(e) {
		let option = e.target.closest('.select-drop__option');
		if(!option) return;
		dropOptions.forEach(item=> {
			item.classList.remove('active');
		})
		option.classList.add('active');
		dropBtnText.innerText = option.innerText;
		dropList.classList.remove('active');
		dropBtn.classList.remove('active');
	})
	document.addEventListener('click', function(e) {
		if(e.target.closest('.select-drop__btn')) return;
		dropBtn.classList.remove('active');
		dropList.classList.remove('active');
	})
})

