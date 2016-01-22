
var Click = function () {
  //object to hold all public methods
  var obj = {};

  //PRIVATE
  //helpers for Priority Plus menu
  var drop = function ($dropdown) {
    if ($dropdown.hasClass('hidden')){
      $dropdown.removeClass('hidden').animate({
        'top':'3.5em'
      }, 200);
    } else {
      $dropdown.animate({
        'top':'0'
      }, 200, function(){
        $dropdown.addClass('hidden');
      });
    }
  };

  //helpers for city selectors
  var linkSwitch = function (CityLinks) {
    //links should be an object of important links
    //with keys equal to their CSS selector targets
    var targets = Object.keys(CityLinks);
    
    //loop over array of target classes, replace the href attr for each element
    for (var i = 0; i<targets.length; i++){
      var $el = $('.' + targets[i]);
      var content = CityLinks[targets[i]];

      $el.each(function(){
        //for each instance of the function, check whether the href or text content should be changed
        if(content.match('http')){
          $el.attr('href', content);
        } else {
          $el.text(content);
        }
      });
    }
  };

  //PUBLIC
  //Priority Plus menu JavaScript
  obj.priorityMenu = function (id) {
    var $target = $(id);
    var $dropdown = $('#menudrop');

    //attach event listener to a specific anchor tag with a dropdown
    $target.on('click', 'a', function(){
      //quick default anchor tag prevention
      if($target.attr('href') === '#'){
        event.preventDefault();
      }
      //toggle dropdown visibility
      drop($dropdown);
    });
    //same event listener for dropdown menu items
    $dropdown.on('click', 'a', function(){
      if($dropdown.attr('href') === '#'){
        event.preventDefault();
      }
      //toggle dropdown visibility
      drop($dropdown);
    });
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
  obj.cities = function (Links) {
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
      linkSwitch(CityLinks);
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
