// Navbar Transition Effect

$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 150) {
      $('#navbar').addClass('solid');
      $('.item-a').addClass('solid-a');
    } else {
      $('#navbar').removeClass('solid');
      $('.item-a').removeClass('solid-a');
    }
  });
});

// JavaScript Document lightslider
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,

    loop: true,
    auto: true,
    controls: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    },
  });
});
