$(document).ready(function () {
    generateGrid(16);
    randomColor();
  });

function generateGrid(number) {
  for (var i = 1; i <= (number * number); i = i + 1) {
    $('#container').append('<div class="square"></div>');
  }

  var $square = $('.square');
  var squareSide = (700 / number) - 2;
  $square.height(squareSide);
  $square.width(squareSide);
}

function randomColor() {
  var $square = $('.square');
  $square.on('mouseenter', function () {
              if (!$(this).hasClass('colored')) {
                $(this).addClass('colored');
                var rgb1 = Math.floor((Math.random() * 255) + 1);
                var rgb2 = Math.floor((Math.random() * 255) + 1);
                var rgb3 = Math.floor((Math.random() * 255) + 1);
                $(this).css({ 'background-color': 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')' });
              } else {
                var oldColor = $(this).css('background-color');
                var rgb = oldColor.replace(/^(rgb)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
                var rgbR = (Math.floor((parseInt(rgb[0])) * 0.8));
                var rgbG = (Math.floor((parseInt(rgb[1])) * 0.8));
                var rgbB = (Math.floor((parseInt(rgb[2])) * 0.8));
                $(this).css({ 'background-color': 'rgb(' + rgbR + ',' + rgbG + ',' + rgbB + ')' });
                var newColor = $(this).css('background-color');
              }
            });
}

$('#buttonReset').click(function () {
        var $square = $('.square');
        var length = prompt('Please enter number of squares per side');
        $square.remove();
        generateGrid(length);
        randomColor();
      });
