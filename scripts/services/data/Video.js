(function (TEMPLATES) {

    var template = TEMPLATES['video'];

    $(function () {
        new Video(template, 'videos-wrapper').displayVideosOfChannel(544319);
    });

})(window.TEMPLATES);