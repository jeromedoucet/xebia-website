$(function () {
    Xebia.init();
});

Xebia = {
    current: 0,
    init: function () {

        //On recode ici le debounce de underscore car pour 1 fonction
        // il ne semblait pas utile de tirer toute la librairie
        var debounce = function (func, wait, immediate) {
            var result;
            var timeout = null;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) result = func.apply(context, args);
                return result;
            };
        };


        $(".nav a").click(function (event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top - 25}, 400);
        });

        $(window).scroll(debounce(Xebia.menuSlider, 100));

        this.next();

        $('.dot').click(function () {
            Xebia.next();
        });

        setInterval(function () {
            Xebia.next()
        }, 10000);

        setInterval(function () {
            Xebia.nextClient('.logo-small div')
        }, 5500);
        setInterval(function () {
            Xebia.nextClient('.logo-large div')
        }, 4500);

        this.initLogos();

        var activateContactJoinForm = function () {
            $('.contact-talk').removeClass('active');
            $('.contact-join').addClass('active');
            $('.contact-form-talk').fadeOut('slow');
            $('.contact-form-join').fadeIn('slow');
            $('.contact-pointer').animate({left: "750px"}, 300);
        };

        var activateContactTalkForm = function () {
            $('.contact-join').removeClass('active');
            $('.contact-talk').addClass('active');
            $('.contact-form-join').fadeOut('slow');
            $('.contact-form-talk').fadeIn('slow');
            $('.contact-pointer').animate({left: "230px"}, 300);
        };

        $('.contact-join').click(activateContactJoinForm);
        $('.contact-talk').click(activateContactTalkForm);
        $('.maybe-you').click(activateContactTalkForm);
    },
    menuSlider: function () {

        var top = $(window).scrollTop() + 1;
        var pointer = $('.nav .pointer');

        if (top < $('#passion').position().top) {
            pointer.animate({left: "150px"}, 300); // hello
        } else if (top < $('#trust').position().top) {
            pointer.animate({left: "260px"}, 300); // passion
        } else if (top < $('#universe').position().top) {// prev: 2000
            pointer.animate({left: "405px"}, 300); // trust
        } else if (top < $('#contact').position().top) { // prev: 2850 preprev 2530
            pointer.animate({left: "555px"}, 300); // universe
        } else if (top < $('#work').position().top) { // prev: 3450
            pointer.animate({left: "680px"}, 300); // contact
        } else {
            pointer.animate({left: "805px"}, 300); // work
        }
    },
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    initLogos: function () {

        for (var i = 0; i < 26; i++) {
            $('<div>')
                .css('background',
                    "url('images/trust-logos-small.png') -" + (i * 170) + "px 0px no-repeat")
                .hide()
                .appendTo('.logo-small')
        }

        for (var i = 0; i < 6; i++) {
            var hiddenLogos = $('.logo-small div').filter(":hidden");
            hiddenLogos.eq(this.random(0, hiddenLogos.length)).show();
        }

        for (var i = 0; i < 14; i++) {
            $('<div>')
                .css('background',
                    "url('images/trust-logos-large.png') -" + (i * 220) + "px 0px no-repeat")
                .hide()
                .prependTo('.logo-large')
        }

        for (var i = 0; i < 4; i++) {
            var hiddenLogos = $('.logo-large div').filter(":hidden");
            hiddenLogos.eq(this.random(0, hiddenLogos.length)).show();
        }

    },
    nextClient: function (selector) {
        var visibleLogos = $(selector).filter(":visible");
        var oldLogo = visibleLogos.eq(this.random(0, visibleLogos.length));
        var hiddenLogos = $(selector).filter(":hidden");
        var newLogo = hiddenLogos.eq(this.random(0, hiddenLogos.length));

        $(oldLogo).fadeOut(2000, function () {
            $(oldLogo).before($(newLogo));
            $(newLogo).fadeIn(2000);
        });

    },
    next: function () {
        $(".slide" + this.current).fadeOut(600);
        $(".dot" + this.current).removeClass('active');
        var nbSlides = $('.carousel-slides').children().size();
        this.current = (this.current >= nbSlides) ? 1 : this.current + 1;
        $(".slide" + this.current).fadeIn(700);
        $(".dot" + this.current).addClass('active');
    }
}

