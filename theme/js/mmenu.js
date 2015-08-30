$(function(){
    $('#menu-icon').click(function(){
        $('#menubar').slideToggle()
        $('body').animate({left:'300px'},600);
        $('#menu-icon').addClass('menu-active');
    });
});