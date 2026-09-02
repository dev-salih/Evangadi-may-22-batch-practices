$(document).ready(function () {
  $(".footer-links-wrapper h3").click(function () {
    // console.log($(".footer-links-wrapper h3").length);

    // only run on mobile
    if ($(window).width() <= 768) {
      let marged = $(this).next("ul"); //this the element that was clicked

      // toggle slide
      marged.slideToggle();

      // toggle + / × icon
      $(this).toggleClass("expanded");
    }
  });
});

$(window).resize(function () {
  if ($(window).width() > 768) {
    $(".footer-links-wrapper ").removeClass("expanded");
  }
});
