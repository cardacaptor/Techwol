// $(document).ready(function () {
//   $(".dropdown").hover(function () {
//     var dropdownMenu = $(this).children(".dropdown-menu");
//     if (dropdownMenu.is(":visible")) {
//       dropdownMenu.parent().toggleClass("open");
//     }
//   });
// });


document.querySelectorAll('*').forEach(el => {
  if (el.scrollWidth > document.documentElement.offsetWidth){
      console.log('Found the worst element ever: ', el);
  }
});

