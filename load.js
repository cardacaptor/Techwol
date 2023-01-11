var popovers = document.querySelectorAll('.popovers .solution-container');
var popoverTriggers = document.querySelectorAll('.popover__trigger');
var popoverWidget = document.querySelectorAll('.solution_popover');

for (var i = 0; i < popoverTriggers.length; i++) {
	popoverTriggers[i].addEventListener('click', async function (event) {
		// if (!this.classList.contains('popover--active')) {
		// 	this.classList.toggle('popover--active')
		// }
		// this.className += 'popover--active'
		var cont = this.classList.contains('popover--active')
		closeAllOthers()
		if (!cont) {
			this.classList.toggle('popover--active')
		}
		for (var i in popoverWidget) {
			if (popoverWidget[i].classList.contains('popover--active')) {
				popoverWidget[i].classList.remove('popover--active');
				popoverWidget[i].className += " popover--inactive";
			} else {
				popoverWidget[i].classList.remove('popover--inactive');
				popoverWidget[i].className += " popover--active";
			}
		}
	}
	)
}

const closeAllOthers = () => {
	for (var i = 0; i < popoverTriggers.length; i++) {
		popoverTriggers[i].classList.remove('popover--active')
	}
}
