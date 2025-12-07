// Change Color Navbar Elements on Scroll - responsive threshold

   $(window).scroll(function(){
    // On mobile (< 768px), use lower threshold; on desktop, use higher
    var scrollThreshold = $(window).width() < 768 ? 100 : 500;
    
    if ($(this).scrollTop() > scrollThreshold) {
       $('.icon-bar').addClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo-light.png');
    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-brand img').attr('src', 'img/logo.png');
    }
});



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
