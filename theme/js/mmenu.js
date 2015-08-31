$(function(){
  $('.menu-icon').click(function(){
    if($('#menubar').hasClass('expanded')){
        $('body').animate({left:'0px'});
        $('#menubar').removeClass('expanded').animate({left:'-250px'});
    } else {
        $('body').animate({left:'200px'});
        $('#menubar').addClass('expanded').animate({left:'-25px'});
      }
    });
  $('#menubar a').click(function(){
    if($('#menubar').hasClass('expanded')){
      $('body').animate({left:'0px'});
      $('#menubar').removeClass('expanded').animate({left:'-250px'});
    }
  });
});

