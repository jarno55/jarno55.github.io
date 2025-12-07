// Always use regular (dark) version for logo and menu

   $(window).scroll(function(){
    // Keep regular dark version at all times
    $('.icon-bar').removeClass('opaque');
    $('.navbar-brand img').attr('src', 'img/logo.png');
});

// Disabled second scroll handler - keeping dark version only
/*
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#topbar, .cart-label').fadeOut('slow');
            $('.logo img')
                .attr('src','img/logo.png');
        }
        if($(this).scrollTop() < 100) {
            $('#logo, #topbar, .cart-label').fadeIn('fast');
            $('.logo img')
                .attr('src','img/logo-light.png');
        }
    });
});
*/
