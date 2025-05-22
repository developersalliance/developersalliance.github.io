$(document).ready(function() {
    $('.widget-handle').on('click', function() {
      $('.module-group').toggleClass('active');
    });

      $("form").on("submit", function () {
        setTimeout(() => {
          $(this).trigger("reset"); 
        }, 900);
    });
});

