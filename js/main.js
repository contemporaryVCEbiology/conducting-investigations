$(document).ready(function(){
    Barba.Prefetch.init();
     
    $('.explain-menu-toggle').click(function(){
        if($(this).hasClass('open')){
            $('.explain-menu-toggle, .explain-menu, .explain-menu button').removeClass('open');
            $('.overlay, .help').fadeOut();
        } else {
            $('.explain-menu-toggle, .explain-menu').addClass('open');
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
    $('.overlay').click(function(){
        $('.overlay, .help').fadeOut();
        $('.button').removeClass('open');
        $('.explain-menu').toggleClass('open');
    });
});