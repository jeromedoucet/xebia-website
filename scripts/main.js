window.selectMainMenu = function (li) {
    var $indicator = $('.indicator');
    if (li) {
        li.addClass('selected');

        var indicatorPosition = li.position().left + li.outerWidth() / 2 - $indicator.outerWidth() / 2;
        $indicator.css('left', indicatorPosition);
    } else {
        $indicator.css('visibility', 'hidden');
    }
};



$(function () {
    $('.mobile-menu-button').click(function () {
        $('nav').toggleClass('shown');
    });



    var positionMenu = function () {
        var currentUrl = window.location.href;
        var filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

        var currentLi = null;
        $('nav li').each(function () {
            var $li = $(this);

            if (filename.indexOf($li.find('a').attr('href')) === 0) {
                currentLi = $li;
            }
        });

        selectMainMenu(currentLi);
    };

    positionMenu();
    $(window).resize(positionMenu);


    $('.xebia-global').click(function () {
        $('.xebia-links').slideToggle();
    });

    var $mentionsPopup = $('#mentions-legales-popup');
    $('.mentions-legales').click(function () {
        $mentionsPopup.slideDown();
    });

    $mentionsPopup.find('.close').click(function () {
        $('#mentions-legales-popup').slideUp();
    });

    //$('.show-service-sub-menu').hover(function() {
      //$('.service-menu').show();
    //});

    //$('.show-service-sub-menu').mouseleave(function() {
      //$('.service-menu').hide();
    //});

    //$('.show-knowledge-sub-menu').hover(function() {
      //$('.knowledge-menu').show();
    //});

    //$('.show-knowledge-sub-menu').mouseleave(function() {
      //$('.knowledge-menu').hide();
    //});

    var shrinkHeader = 300;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();

       if ( scroll >= shrinkHeader ) {
            $('.header-bg').addClass('scroll-header-bg');
         }
         else {
             $('.header-bg').removeClass('scroll-header-bg');
         }

         if ( scroll >= shrinkHeader ) {
              $('.header-links').addClass('scroll-header');
           }
           else {
               $('.header-links').removeClass('scroll-header');
           }

           if ( scroll >= shrinkHeader ) {
                $('.header-content').addClass('scroll-header-2');
             }
             else {
                 $('.header-content').removeClass('scroll-header-2');
             }


     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }
});
