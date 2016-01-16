(function(window, document, $, Click, Scroll) {
  'use strict';

  //click events
  Click.scroller();
  Click.slides();
  Click.faq();
  Click.priorityMenu('#about');

  //scroll events
  $(window).scroll(
    function () {
      Scroll.fadeIn();
    });

}(window, document, window.jQuery, Click(), Scroll() ));
