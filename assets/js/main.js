$(document).ready(function() {
  


 var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("FixedScrol").style.top = "0";
        } else {
            document.getElementById("FixedScrol").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
}); 
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("FixedScrol").style.top = "0";
//   } else {
//     document.getElementById("FixedScrol").style.top = "-50px";
//   }
// }