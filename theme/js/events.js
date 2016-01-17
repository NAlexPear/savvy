(function(window, document, $, Click, Scroll) {
  'use strict';

  //click events
  Click.scroller();
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


}(window, document, window.jQuery, Click(), Scroll() ));
