
jQuery(document).ready(function($){

var currentPage = window.location.pathname;
var contactPage = "/contact.html";
  var onContactPage = function(){

  // these are to locate the current page name you are on



// place the nav bar at the top of page to ensure it does not conflict with form
// don't show the mail button
  if (currentPage === contactPage) {
    $('#nav-bar').css("position", "absolute").show(0);
    $('#mail-icon').hide(0);
  } else {
    $("#nav-bar").hide(0).delay(5000).fadeIn(1000).show(0);
    $("#mail-icon").hide(0);
    $(".bounce").hide(0).delay(4000).fadeIn(1000).show(0);

    $(window).scroll(function () {

      // set the percentage to activate fade in
      var mailTargetPercentage = 15;
      var arrowTargetPercentage = 5;


      // checks doc height
      scrollTo = $(window).scrollTop(),
      docHeight = $(document).height(),
      windowHeight = $(window).height();
      scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;


// to round to nearest whole number
    scrollPercent = scrollPercent.toFixed(1);


      if(scrollPercent > mailTargetPercentage) {
        $('#mail-icon').fadeIn(500).show(0)
      }

      if(scrollPercent > arrowTargetPercentage) {
        $('.bounce').fadeIn(500).show(0)
      }



    }).trigger('scroll');
}
}

  onContactPage();




// var pageSelect = function(){
//   if (currentPage === contactPage) {
//     $('#site-nav hr').css("margin-left", "33.33%");
//     console.log("yo");
//   }
// }

// pageSelect();


});





