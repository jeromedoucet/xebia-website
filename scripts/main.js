$(document).ready(function() {
  Xebia.init();
});

Xebia = {
  current : 0,
  init: function(){

    $(".nav a").click(function(event){   
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top-25}, 400);
    });

    $(window).scroll(_.debounce(Xebia.menuSlider, 100));

    this.next();
    $('.dot1').bind('click', function() {
      Xebia.next();
    });
    $('.dot2').bind('click', function() {
      Xebia.next();
    });
    var timer = setInterval(function(){Xebia.next()}, 10000);


    $('.contact-join').bind('click', function() {
      $('.contact-talk').removeClass('active');
      $(this).addClass('active');
      $('.contact-form-talk').fadeOut('slow');
      $('.contact-form-join').fadeIn('slow');
      $('.contact-pointer').animate({left: "750px"}, 300);
    });

    $('.contact-talk').bind('click', function() {
      $('.contact-join').removeClass('active');
      $(this).addClass('active');
      $('.contact-form-join').fadeOut('slow');
      $('.contact-form-talk').fadeIn('slow');
      $('.contact-pointer').animate({left: "230px"}, 300);
    });

  },
  menuSlider: function() {

    var top = $(window).scrollTop();
    var pointer = $('.nav .pointer');

    if ( top < 550 ) {
      pointer.
      
      ({left: "185px"}, 300); // hello
    } else if ( top < 1300 ) {
      pointer.animate({left: "295px"}, 300); // passion
    } else if ( top < 1455 ) {// prev: 2000 
      pointer.animate({left: "440px"}, 300); // trust
    } else if ( top < 2080 ) { // prev: 2850 preprev 2530
      pointer.animate({left: "585px"}, 300); // universe
    } else if ( top < 3130 ) { // prev: 3450
      pointer.animate({left: "715px"}, 300); // contact
    } else if ( top < 4180 ) { // prev: 4500
      pointer.animate({left: "805px"}, 300); // work
    } else {
      pointer.animate({left: "185px"}, 300);
    }
  },
  next: function() {
    $(".slide" + this.current).fadeOut(600);
    $(".dot" + this.current).removeClass('active');
    nbSlides = $('.carousel-slides').children().size();
    this.current = (this.current >= nbSlides) ? 1 : this.current + 1;
    $(".slide" + this.current).fadeIn(700);
    $(".dot" + this.current).addClass('active');
  }
}

