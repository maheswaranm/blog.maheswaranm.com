$(window).scroll(function() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 150;
    
    if (distanceY > shrinkOn) {
      $("#namebrand").addClass("namebrand-small");
      $("#tagline").hide();
    } else {
      $("#namebrand").removeClass("namebrand-small mt-2");
      $("#tagline").show();
    }
});