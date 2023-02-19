AOS.init();

// nav scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName('nav')[0].style.top = "0";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}






