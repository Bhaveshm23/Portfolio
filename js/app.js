var countMenuToggleClicks = 0;

$('.menu-toggle').click(function(){
   
    $('.site-nav').toggleClass('site-nav--open',500); //toggleClass after 500ms

    //Adding/Removing blur
    $('section').toggleClass('content');
    $('footer').toggleClass('content');
    //Adding X
    $(this).toggleClass('open');
  
    //when clicked on list item
    $('.site-nav li').click(function(){

         
            $('.site-nav').removeClass('site-nav--open',500);
            //remove the X
            $('.menu-toggle').removeClass('open');
            //Removing blur
            $('section').removeClass('content');
            $('footer').removeClass('content');
    });

   
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



