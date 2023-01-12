var popovers = document.querySelectorAll(".popovers .solution-container");
var popoverTriggers = document.querySelectorAll(".popover__trigger");
var popoverWidget = document.querySelectorAll(".solution_popover");

function eventHandler(event) {
  var cont = this.classList.contains("popover--active");
  closeAllOthers();
  if (!cont) {
    this.classList.toggle("popover--active");
    addPopOver(event.currentTarget.indexInHtml);
  }
}

for (var i = 0; i < popoverTriggers.length; i++) {
  popoverTriggers[i].addEventListener("click", eventHandler);
  popoverTriggers[i].indexInHtml = i;
}

const removePopOver = () => {
  for (var i of popoverWidget) {
    if (i.classList.value.includes("popover--show")) {
      i.classList.remove("popover--show");
      i.className += " popover--hide";
    }
  }
};
const addPopOver = (j) => {
  if (!popoverWidget[j].classList.contains("popover--show")) {
    popoverWidget[j].classList.remove("popover--hide");
    popoverWidget[j].className += " popover--show";
  }
};

const closeAllOthers = () => {
  removePopOver();
  for (var i = 0; i < popoverTriggers.length; i++) {
    popoverTriggers[i].classList.remove("popover--active");
  }
};

function leftScrol() {
  const left = document.querySelector(".trying");
  left.scrollBy(200, 0);
}
function rightScrol() {
  const right = document.querySelector(".trying");
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
