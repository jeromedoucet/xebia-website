(function (TEMPLATES) {

    var template = TEMPLATES['video'];

    $(function () {

        var url = "http://vimeo.com/api/v2/xebia/videos.json";

        var promiseForVideos = $.getJSON(url + '?callback=?');

        promiseForVideos.then(function limitNumberOfVideo(videos) {
            return videos.slice(0, 3);
        }).done(function (videos) {
            var html = videos.map(function (video) {
                var videoModel = {
                    title: video.title,
                    isoDate: '',
                    formattedDate: '',
                    description: video.description,
                    url: 'http://player.vimeo.com/video/' + video.id
                };
                return template(videoModel);
            }).join('');

            $('#videos-wrapper').html(html);
        });
    });
})(window.TEMPLATES);