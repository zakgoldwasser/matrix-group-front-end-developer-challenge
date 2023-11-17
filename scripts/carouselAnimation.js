$(document).ready(function () {
  let currentSlide = 0;
  let cardsPerSlide;

  function updateCardsPerSlide() {
    //Set cards per slide based on window width
    if ($(window).width() >= 1000) {
      cardsPerSlide = 3;
    } else if ($(window).width() >= 768) {
      cardsPerSlide = 2;
    } else {
      cardsPerSlide = 1;
    }
  }
  updateCardsPerSlide();
  $(window).resize(updateCardsPerSlide);

  function updateCarousel() {
    //Move carousel items
    // Calculate the width of .carousel element
    const carouselWidth = $('.carousel').outerWidth();
    // Calculate the movement distance in pixels
    const movement = currentSlide * -carouselWidth;
    $('.carousel-mover').css('transform', 'translateX(' + movement + 'px)');
    updateButtons();
  }

  function updateButtons() {
    //Disable and reenable carousel buttons
    const totalCards = $('.card').length;
    const maxSlideIndex = Math.ceil(totalCards / cardsPerSlide) - 1; //get total number of slides

    $('.carousel-button.prev').toggleClass('disabled', currentSlide === 0);
    $('.carousel-button.next').toggleClass(
      'disabled',
      currentSlide >= maxSlideIndex
    );
  }

  $('.carousel-button.next').click(function () {
    if (currentSlide < Math.ceil($('.card').length / cardsPerSlide) - 1) {
      currentSlide++;
      updateCarousel();
    }
  });

  $('.carousel-button.prev').click(function () {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });
});
