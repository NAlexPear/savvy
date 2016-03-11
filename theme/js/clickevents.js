
var Click = function () {
  //object to hold all public methods
  var obj = {};

  //PRIVATE

  var OFFSET = 56;
  //helpers for Priority Plus menu
  var dropup = function ($dropdown, topValue) {
    var topValue = parseInt($dropdown.css('top').split('px')[0], 0);
    var newTopValue = topValue - OFFSET;
    var newTopString = (newTopValue.toString()) + 'px';

    $dropdown.animate({
      'top': newTopString
    }, 200);
  };

  var dropdown = function ($dropdown) {
    var topValue = parseInt($dropdown.css('top').split('px')[0], 0);
    var newTopValue = isNaN(topValue) ? OFFSET : topValue + OFFSET;
    var newTopString = (newTopValue.toString()) + 'px';

    $dropdown.animate({
      'top': newTopString
    }, 200);
  };

  var drop = function ($dropdown) {
    //establish baseline value for top (the CSS attr)
    if ($dropdown.hasClass('visible')){
      dropup($dropdown);
      $dropdown.removeClass('visible');
    } else {
      dropdown($dropdown);
      $dropdown.addClass('visible');
    }
  };
  //PUBLIC
  //Priority Plus menu JavaScript
  obj.priorityMenu = function (accordianArray) {
    //accordianArray should be an array of Objects. The order should be from top -> bottom, with an anchorSelector and dropdownSelector defined for each item in the array
    //set up basic click listener that emits an event to be handled by the other menu items
    accordianArray.forEach(function (menuObject) {
      var $target = $(menuObject.anchorSelector);
      var $dropdown = $(menuObject.dropdownSelector);

      $target.on('click', 'a', function ( e ) {
        //quick default anchor tag prevention
        if($target.attr('href') === '#'){
          event.preventDefault();
        }

        var index = accordianArray.indexOf(menuObject);
        //emit an event to be handled differently according to index number in accordianArray
        $target.trigger('menu:click:' + index);
      });
    });

    //attach event listener to a specific anchor tag with a dropdown
    $(accordianArray[0].anchorSelector).on('menu:click:0', function(){
      //toggle dropdown visibility
      var $dropdown = $(accordianArray[0].dropdownSelector);
      drop($dropdown);

      var otherDropdowns = _.filter(accordianArray, function (menuObject) {
          return accordianArray.indexOf(menuObject) > 0
      });

      otherDropdowns.forEach(function (dropdown) {
        var $dropdown = $(dropdown.dropdownSelector);
        drop($dropdown);
      });
    });

    for(var i = 1; i < accordianArray.length; i++){
      $(accordianArray[i].anchorSelector).on('menu:click:' + i, function () {
        console.log('you clicked a sub menu!');
        console.log(accordianArray[i - 1]);
        //toggle dropdown visibility
        var $dropdown = $(accordianArray[i - 1].dropdownSelector);

        if($dropdown.hasClass('visible')){
          $dropdown.removeClass('visible');
        }
        drop($dropdown);
        var clickCount = $dropdown.data('clickCount');
        if (clickCount === undefined ) {
          $dropdown.data('clickCount', 1);
        } else {
          $dropdown.data('clickCount', clickCount++);
       }

       console.log( $dropdown.data('clickCount') );
       
       if ($dropdown.data('clickCount') >= i -1) {
         $dropdown.addClass('visible');
         drop($dropdown);
       }
      });
    }
  };
  //scroll to IDs on the page
  obj.scroller = function(){
    $('a').click(function(){
      var href = $.attr(this, 'href');
      //only run if href points to something other than '#'
      if (href === '#'){
        event.preventDefault();
      } else {
        $('html, body').animate({
            scrollTop: $(href).position().top
        }, 700, function () {
            window.location.hash = href;
        });
      }

    });
  };
  //city selector buttons (takes the Links object as an input)
  obj.cities = function (Links, Helpers) {
    $('#location-picker').on('click','li',function(){
      var $target = $(this);
      //sets active/inactive style for buttons on click
      if($target.hasClass('active') === false){
        $target.siblings('li').removeClass('active');
        $target.addClass('active');
      }

      //sets city variable by reading the text content of the clicked city button
      var city = $target.text().replace(/[^\w]/gi,"").toLowerCase();

      //grabs data from invoked Link object (built via function)
      var CityLinks = Links[city];

      //fires linkSwitch() on the object of city links
      Helpers.linkSwitch(CityLinks);
    });
  };
  //Week-By-Week Curriculum revealer
  obj.slides = function () {
    $('#syllabus').on('click','li', function(){
      var n = $(this).index() + 1;
      var currentSlide = $('.active-slide');
      var nextSlide = $('div.slide:nth-child(' + n + ')');

      //animate buttons
      $(this).siblings('li').animate({
        'opacity':'0.6'
      }, 100);
      $(this).animate({
        'opacity':'1'
      }, 100);

      //change slides
      currentSlide.fadeOut(100).removeClass('active-slide');
      nextSlide.fadeIn(100).addClass('active-slide');
    });
  };
  //FAQ page active response revealer
  obj.faq = function(){
    $('#faq-list').on('click','li',function(){
      var target = $(this).children('.response');
      var others = $(this).siblings('li').children('.response');
      if (target.hasClass('.active-response')) {
        target.removeClass('.active-response').slideUp(300);
      } else {
        others.removeClass('.active-response').slideUp(300);
        target.addClass('.active-response').slideDown(300);
      }
    });
  };

  return obj;
};
