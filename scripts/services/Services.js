(function () {
    $(function () {

        var $navbar = $('.navbar');

        var stickyNavTop = $navbar.offset().top;

        var stickyNav = function () {
            var scrollTop = $(window).scrollTop();
            $navbar.toggleClass('sticky', scrollTop > stickyNavTop)
        };

        stickyNav();

        $(window).scroll(stickyNav);
    });
})();