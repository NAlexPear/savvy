
var Click = function () {
  //object to hold all public methods
  var obj = {};

  //PRIVATE
  //helpers for Priority Plus menu
    //set screenwidths at which the more-less button appears
    var makeVisible = function ($target) {
      if($(window).width() < 1000 && $target.hasClass('hidden')){
        $target.removeClass('hidden');
      }
    };
    //rotate arrow using CSS transforms, used in more_less()
    var arrow = function ($target) {
      var $newTarget = $target.children('div');
      if($newTarget.hasClass('turnt')){
        $newTarget.removeClass('turnt');
      } else {
        $newTarget.addClass('turnt');
      }
    };
    //set up function to change MORE to LESS on different events
    var more_less = function ($target) {
      //include arrow-turning function
      arrow($target);
      //set text changes for MORE-LESS
      var $newTarget = $target.children('div').children('span.more-less');
      var text = $newTarget.text();
      if(text === 'MORE'){
        $newTarget.text('LESS');
      } else {
        $newTarget.text('MORE');
      }
    };


  //PUBLIC
  //Priority Plus menu JavaScript
  obj.priorityMenu = function () {
    var $target = $('.overflow');
    //make the more-less button and arrow visible when appropriate
    makeVisible($target);
    //attach event listener to click on the more-less button
    $target.on('click',function(){
      more_less($target);
    });
  };
  //scroll to IDs on the page
  obj.scroller = function(){
      $('a').click(function(){
          var href = $.attr(this, 'href');
          $('html, body').animate({
              scrollTop: $(href).position().top
          }, 700, function () {
          window.location.hash = href;
      });
          return false;
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
