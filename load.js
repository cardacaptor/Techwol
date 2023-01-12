var popovers = document.querySelectorAll(".popovers .solution-container");
var popoverTriggers = document.querySelectorAll(".popover__trigger");
var popoverWidget = document.querySelectorAll(".solution_popover");

for (var i = 0; i < popoverTriggers.length; i++) {
  popoverTriggers[i].addEventListener("click", async function (event) {
    // if (!this.classList.contains('popover--active')) {
    // 	this.classList.toggle('popover--active')
    // }
    // this.className += 'popover--active'
    var cont = this.classList.contains("popover--active");
    closeAllOthers();
    if (!cont) {
      this.classList.toggle("popover--active");
      addPopOver();
    } else {
      removePopOver();
    }
  });
}

const removePopOver = () => {
  for (var i in popoverWidget) {
    if (popoverWidget[i].classList.contains("popover--show")) {
      popoverWidget[i].classList.remove("popover--show");
      popoverWidget[i].className += " popover--hide";
	  remove.leftScroll();
	  remove.rightScroll();
    }
  }
};
const addPopOver = () => {
  for (var i in popoverWidget) {
    if (!popoverWidget[i].classList.contains("popover--show")) {
      popoverWidget[i].classList.remove("popover--hide");
      popoverWidget[i].className += " popover--show";
	  remove.leftScroll();
	  remove.rightScroll();
    }
  }
};

const closeAllOthers = () => {
  for (var i = 0; i < popoverTriggers.length; i++) {
    popoverTriggers[i].classList.remove("popover--active");
  }
};

//for scrolling
function leftScroll() {
  const left = document.querySelector(".scroll__container");
  left.scrollBy(200, 0);
}
function rightScroll() {
  const right = document.querySelector(".scroll__container");
  right.scrollBy(-200, 0);
}

function leftScroll() {
  const left = document.querySelector(".clientContainer");
  left.scrollBy(200, 0);
}
function rightScroll() {
  const right = document.querySelector(".clientContainer");
  right.scrollBy(-200, 0);
}

