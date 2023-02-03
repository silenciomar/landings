let buttons = document.querySelectorAll('.accordion__btn');

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const parent = btn.parentNode;

		if (parent.classList.contains('accordion__item--active')) {
			parent.classList.remove('accordion__item--active');
		} else {
			document.querySelectorAll('.accordion__item').forEach((child) => child.classList.remove('accordion__item--active'))
			parent.classList.add('accordion__item--active');
		}
	})
});