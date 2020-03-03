$(document).ready(function(){

    $('header .contenedor nav a').each(function(index,elemento){
        //Puedes utilizar elemento o this
        $(elemento).css({
            'top':'-200px'
        });

        $(elemento).animate({
            top:'0'
        },1500 + (index* 500));
    });


    if($(window).width() > 800)
    {
        $('header .nombre ').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .nombre ').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }


    //Scroll Elementps Menu

    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#patillos').offset().top;
    var galeria= $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerda-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:acercaDe
        },500);
    });

    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:menu
        },500);
    });

    $('#btn-galeria').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:galeria
        },500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:ubicacion
        },500);
    });

});
