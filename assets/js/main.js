$(document).ready(function() {
  
    
  // banner slider //
//   ! function (e) {
//     "use strict";
//         $('.main_banner').slick({
//             dots: true,
//             infinite: true,
//             speed: 500,
//             fade: true,
//             cssEase: 'linear'
//         });
//     }(jQuery)
//     // banner slider //

    $('.banner_slider').slick({
        speed: 1500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: '0',
        centerMode: false,
        dots: false,
        arrows: false,
        infinite: true,
      });

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