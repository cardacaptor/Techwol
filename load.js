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
			addPopOver()
		} else {
			removePopOver()
		}
	}
	)
}

const removePopOver = () => {
	for (var i in popoverWidget) {
		if (popoverWidget[i].classList.contains('popover--show')) {
			popoverWidget[i].classList.remove('popover--show');
			popoverWidget[i].className += " popover--hide";
		}
	}
}
const addPopOver = () => {
	for (var i in popoverWidget) {

		if (!popoverWidget[i].classList.contains('popover--show')) {
			popoverWidget[i].classList.remove('popover--hide');
			popoverWidget[i].className += " popover--show";
		}
	}
}

const closeAllOthers = () => {
	for (var i = 0; i < popoverTriggers.length; i++) {
		popoverTriggers[i].classList.remove('popover--active')
	}
}
