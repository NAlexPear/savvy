(function(window, document, $, Helpers, Click, Scroll, Links) {
  'use strict';
  //page load events
  Links;
  Helpers.linkUpdate(Links, 'stlouis');

  //click events
  Click.scroller();
  Click.cities(Links, Helpers);
  Click.slides();
  Click.faq();
  Click.priorityMenu('#about');

  //scroll events
    //check for position on page load, too
    Scroll.fadeIn();
    //run events when the window is scrolled
    $(window).scroll(function() {
      Scroll.fadeIn();
    });

  //form validation and response
  $('form .subjects').on('change', function () {
    var $val = $(this).val();
    var $modal = $('#other-modal');
    if($val === 'Other') {
      $modal.removeClass('hidden');
    } else if ($modal.hasClass('hidden') === false) {
      $modal.addClass('hidden');
    }
  });

}(window, document, window.jQuery, Helpers(), Click(), Scroll(), Links() ));
