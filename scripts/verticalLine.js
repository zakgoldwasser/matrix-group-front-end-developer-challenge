$(document).ready(function () {
  /*Draw a vertical line to connect the horizontal lines 
  that extend from the knowledge items icons*/
  var item1 = $('.icon').first();
  var item3 = $('.icon').eq(2);

  var y1 = item1.position().top + item1.outerHeight() / 2;
  var y3 = item3.position().top + item3.outerHeight() / 2;

  var $line = $('<div class="line"></div>').css({
    top: y1,
    height: y3 - y1 + 1,
  });

  $('.knowledge-items').append($line);
});
