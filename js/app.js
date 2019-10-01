$('.menu-toggle').click(function(){
    $('.site-nav').toggleClass('site-nav--open',500); //toggleClass after 500ms

    //Adding X
    $(this).toggleClass('open');
  
});


//Navbar scroll

var documentElement = $(document),
    nav = $('header'),
    lastScrollTop = 0;

documentElement.on('scroll', function() {

    var currentScrollTop = $(this).scrollTop();

    // Scroll down
    if(currentScrollTop > lastScrollTop){
        nav.addClass('hidden');
    }else{
        //Scroll up
        nav.removeClass('hidden');

    }
    lastScrollTop = currentScrollTop;
    
});



