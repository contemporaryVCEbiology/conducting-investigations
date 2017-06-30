$(document).ready(function(){
    Barba.Prefetch.init();

    $('.explain-menu-toggle').click(function(){
        if($(this).hasClass('open')){
            $('.explain button, .explain-menu').removeClass('open');
            $('.overlay, .help').fadeOut();
        } else {
            $('.explain button').removeClass('open');
            $('.overlay, .help').fadeOut();
            $(this).addClass('open');
            $('.explain-menu').addClass('open');
        }
    });
    $('.explain-menu button').click(function(){
        if(!$(this).hasClass('open')){
            $(this).siblings().removeClass('open');
            $('.help').fadeOut();
            $(this).addClass('open');
            var target = $(this).attr('data-target');
            $('.overlay, #'+target).fadeIn();
        }
    });
    $('.howto-menu-toggle').click(function(){
        $('.explain button, .explain-menu').removeClass('open');
        if($(this).hasClass('open')){ 
            $('.overlay, .help').fadeOut();
        } else {
            $('.overlay, .help').fadeOut();
            $(this).addClass('open');
            var target = $(this).attr('data-target');
            $('.overlay, #'+target).fadeIn();
        }
    });
    $('.overlay').click(function(){
        $('.overlay, .help').fadeOut();
        $('.explain button, .explain-menu').removeClass('open');
    });
});