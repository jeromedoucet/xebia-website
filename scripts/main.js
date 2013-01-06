$(document).ready(function() {
  Xebia.init();
});

Xebia = {
  init: function(){

    $(".nav a").click(function(event){   
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top-25}, 400);
    });

    $(window).scroll(_.debounce(Xebia.menuSlider, 100));

  },
  menuSlider: function() {

    var top = $(window).scrollTop();
    var pointer = $('.nav .pointer');

    if ( top < 550 ) {
      pointer.animate({left: "185px"}, 300); // hello
    } else if ( top < 1300 ) {
      pointer.animate({left: "295px"}, 300); // passion
    } else if ( top < 2000 ) {
      pointer.animate({left: "440px"}, 300); // trust
    } else if ( top < 2850 ) {
      pointer.animate({left: "585px"}, 300); // universe
    } else if ( top < 3450 ) {
      pointer.animate({left: "715px"}, 300); // contact
    } else if ( top < 4500 ) {
      pointer.animate({left: "805px"}, 300); // work
    } else {
      pointer.animate({left: "185px"}, 300);
    }
  }
}

