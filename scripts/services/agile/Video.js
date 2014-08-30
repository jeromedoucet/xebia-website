(function (TEMPLATES) {

    var template = TEMPLATES['video'];

    $(function () {
        new Video(template, 'videos-wrapper').displayVideosOfChannel(556664);
    });
    
})(window.TEMPLATES);