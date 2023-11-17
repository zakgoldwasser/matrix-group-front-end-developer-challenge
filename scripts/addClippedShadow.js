$(document).ready(function () {
  /*JQuery does not work with psuedo elements because they are not part of the DOM.
  This function creates and adds the psuedo element to the head of the document as a workaround*/
  function adjustCardShadow() {
    //Get bottom of gray bar
    var sectionBottom =
      $('.latest-news-section').offset().top +
      $('.latest-news-section').outerHeight();

    var $firstCard = $('.card:first');
    //Get bottom of card
    var cardBottom = $firstCard.offset().top + $firstCard.outerHeight();
    //Get difference in size between card and grey bar then invert
    var clipSize = cardBottom - sectionBottom;
    var invertedClipSize = $firstCard.outerHeight() - clipSize;

    var clipPath =
      'polygon(-5% ' +
      invertedClipSize +
      'px, 110% ' +
      invertedClipSize +
      'px, 105% 110%, -5% 110%)';

    var newStyle = `
            .card::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0px 4px 5px var(--theme-shadow-color);
                z-index: -100;
                clip-path: ${clipPath}; 
            }
        `;

    // Add or update the pseudo-class in the head
    if ($('#card-after-style').length) {
      $('#card-after-style').html(newStyle);
    } else {
      $('head').append("<style id='card-after-style'>" + newStyle + '</style>');
    }
  }

  adjustCardShadow();
  $(window).resize(adjustCardShadow);
});
