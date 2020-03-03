$(document).ready(function(){
$(window).scroll(function(){

    var anchoventana = $(window).width();
    if(anchoventana > 800)
    {
        var scroll = $(window).scrollTop();
        $('header .nombre ').css({
            'transform':'translate(0px,' + scroll/2 +'%)'
        });

        $('.acerca-de article ').css({
            'transform':'translate(0px,-' + scroll/6 +'%)'
        });
    }
});

$(window).resize(function(){
    var anchoventana = $(window).width();
    if(anchoventana < 800)
    {
        $('.acerca-de article ').css({
            'transform':'translate(0px,0px)'
        });
    }
});
});