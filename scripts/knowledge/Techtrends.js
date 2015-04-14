(function (TECHTRENDS, TEMPLATES) {

    var clientTemplate = TEMPLATES['techtrend'];

    var displayInformationsForAllTechtrends = function () {

        var html = TECHTRENDS.map(function (techtrend, i) {
            var index = i + 1;
            return '<a href="#techtrend-' + index + '" data-index="' + index + '" class="go-to-techtrend go-to-techtrend-' + index + '">' + index + '</a>';
        }).join('');

        $('#techtrends-links').html(html);
        $('.go-to-techtrend').off('click').click(function () {
            displayTechtrend($(this).data('index'));
        })
    };

    var displayTechtrend = function (index) {
        var techtrend = TECHTRENDS[index - 1];

        //Select index
        var selectedClass = 'selected';
        $('.go-to-techtrend').removeClass(selectedClass);
        $('.go-to-techtrend-' + index).addClass(selectedClass);

        //Display techtrend number
        $('#techtrend-number').html('#' + index);

        //Links
        
        $('.techtrend-ask-for-paper').attr('href', 'mailto:marketing@xebia.fr?subject=Version Papier du techtrends ' + index);

        //Packshot
        $('#packshot-wrapper').html('<img src="data/techtrends/' + techtrend.packshot + '" alt="Techtrends #' + index + '" />');

        //Summary
        $('#summary-wrapper').html(clientTemplate(techtrend));
    };


    $(function () {
        displayInformationsForAllTechtrends();
        //Affichage du dernier par défaut
        displayTechtrend(TECHTRENDS.length);
    });
})(window.TECHTRENDS, window.TEMPLATES);
