$(document).ready(function () {
  var activeColor = 'white';

  $('#red').on('click', function () {
    activeColor = 'red';
  });

  $('#green').on('click', function () {
    activeColor = 'green';
  });

  $('#yellow').on('click', function () {
    activeColor = 'yellow';
  });

  $('#blue').on('click', function () {
    activeColor = 'blue';
  });

  $('#white').on('click', function () {
    activeColor = 'white';
  });

  $('#reset').on('click', function () {
    $('.box').css('background-color', 'black')
  });

  $('.box').dblclick(function () {
    $(this).css('background-color', 'black')
  });

  $('.box').on('click', function () {
    $(this).css('background-color', activeColor);
  });
});
