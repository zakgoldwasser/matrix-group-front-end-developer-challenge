$(document).ready(function () {
  function adjustCardWidths() {
    //Adjust number of cards per slide based on screen size
    var carouselWidth = $('.carousel').width();
    if ($(window).width() >= 1000) {
      $('.carousel .card').css('width', carouselWidth / 3 - 40 + 'px');
    } else if ($(window).width() <= 1000 && $(window).width() >= 768) {
      $('.carousel .card').css('width', carouselWidth / 2 - 40 + 'px');
    } else {
      $('.carousel .card').css('width', carouselWidth / 1 - 40 + 'px');
    }
  }

  adjustCardWidths();

  $(window).resize(function () {
    adjustCardWidths();
  });
});
