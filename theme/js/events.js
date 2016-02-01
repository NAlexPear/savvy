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


}(window, document, window.jQuery, Helpers(), Click(), Scroll(), Links() ));
