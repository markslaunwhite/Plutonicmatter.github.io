
jQuery(document).ready(function($){
  $("#mail-icon").hide(0);
  $(".bounce").hide(0).delay(5000).fadeIn(1000).show(0);
  $("#nav-bar").hide(0);

  var onContactPage = function(){

  // these are to locate the current page name you are on
  var currentPage = window.location.pathname;
  var contactPage = "/contact.html";

// place the nav bar at the top of page to ensure it does not conflict with form
// don't show the mail button
  if (currentPage === contactPage) {
    $('#nav-bar').css("position", "absolute").show(0);
    $('#mail-icon').hide(0);
  } else {
    $(window).scroll(function () {

      // set the percentage to activate fade in
      var mailTargetPercentage = 15;
      var arrowTargetPercentage = 5;
      var navBarTargetPercentage = 5;

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

      if(scrollPercent > navBarTargetPercentage) {
        $('#nav-bar').fadeIn(500).show(0)
      }
    }).trigger('scroll');
}
}

  onContactPage();





});





