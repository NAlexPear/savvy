$(function(){
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
});
