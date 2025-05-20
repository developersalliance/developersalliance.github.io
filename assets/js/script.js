$(document).ready(function() {
    $('.widget-handle').on('click', function() {
      $('.module-group').toggleClass('active');
    });

    window.onload = function() {
      $("form").find('input[type="text"], input[type="email"], textarea').val('');
    };
  });

