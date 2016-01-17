
var Scroll = function () {
  //object to hold all public methods
  var obj = {};

  //PRIVATE and CONFIGS
  var selectorArray = [
    '#howworks',
    '#whatlearn',
    '.slide',
    '#students-copy'
  ];

  //PUBLIC
  //reveal div contents as the user scrolls through pages
  //takes an array of CSS selectors to be turned into jQuery objects
  obj.fadeIn = function() {
    var arr = selectorArray;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    for(var i = 0; i<arr.length; i++){
      var sel = arr[i];
      //perform the fading function on each array element
      $(sel).each( function(j){
        var top_of_object = $(this).offset().top;
        //fade in each instance of a selector if it's visible in the window
        if( bottom_of_window > top_of_object){
          $(this).animate({
            'opacity':'1'
          }, 800);
        }
      });
    }
  };

  return obj;
};
