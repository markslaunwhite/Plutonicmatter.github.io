
jQuery(document).ready(function($){
// $(function() {
//     // $(".bounce").delay(4000).fadeIn(500);


// window.onscroll = function() {

//     }

// $(".bounce").hide(0).delay(5000).fadeIn(1000).show(0);
// $("#nav-bar").hide(0);
// $("#mail-icon").hide(0);

// window.onscroll = function() {
// if (window.pageYOffset >= 200){
//             $('.bounce').fadeOut(500).hide(0);
//         } else if (window.pageYOffset <= 10){
//             $('.bounce').fadeIn(500).show(0);
//         }


//         if (window.pageYOffset >= 300){
//             $('#nav-bar').fadeIn(500).show(0);
//         } else if (window.pageYOffset <= 200){
//             $('#nav-bar').fadeOut(500).hide(0);
//         }


//     if (window.pageYOffset >= 400){
//             $('#mail-icon').fadeIn(500).show(0);
//         // } else if (window.pageYOffset <= 10){
//         //     $('#mail-icon').fadeOut(500).hide(0);
//         }



//     }

// });

  $("#mail-icon").hide(0);
  $(".bounce").hide(0).delay(5000).fadeIn(1000).show(0);
  $("#nav-bar").hide(0);
$(window).scroll(function () {

    var mailTargetPercentage = 15;
    var arrowTargetPercentage = 5;
    var navBarTargetPercentage = 5;

    scrollTo = $(window).scrollTop(),
    docHeight = $(document).height(),
    windowHeight = $(window).height();
    scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
// to round to nearest whole number
    scrollPercent = scrollPercent.toFixed(1);


if(scrollPercent > mailTargetPercentage) {
  $('#mail-icon').fadeIn(500).show(0)
  }else if (scrollPercent = 1) {
  $('#mail-icon').fadeOut(500).hide(0);
  }

if(scrollPercent > arrowTargetPercentage) {
  $('.bounce').fadeIn(500).show(0)
  }

if(scrollPercent > navBarTargetPercentage) {
  $('#nav-bar').fadeIn(500).show(0)
  }else if (scrollPercent < mailTargetPercentage) {
  $('#nav-bar').fadeOut(500).hide(0);
  }

}).trigger('scroll');
});





