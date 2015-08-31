$(function(){
    var $root = $('html,body');
    $('a').click(function(){
        var href = $.attr(this, 'href');
        $('html, body').animate({
            scrollTop: $(href).position().top
        }, 700, function () {
        window.location.hash = href;
    });
        return false;
    });
});
