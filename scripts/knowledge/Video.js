(function (TEMPLATES) {

    var template = TEMPLATES['video'];

    $(function () {
        new Video(template, 'videos-wrapper').displayVideosOfUser('xebia');
    });
})(window.TEMPLATES);