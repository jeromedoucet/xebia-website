(function () {

    $(function () {

        var serviceLi = $('nav li').filter(function () {
            return $(this).find('a').attr('href') == 'services.html';
        });


        var positionToServiceLink = function () {
            selectMainMenu(serviceLi);
        };
        positionToServiceLink();
        $(window).resize(positionToServiceLink);
    });

})();