(function () {
    window.Video = function (videoTemplate, idElement) {
        this.videoTemplate = videoTemplate;
        this.idElement = idElement;
    };

    var displayVideosFromVimeos = function (url, videoTemplate, idElement) {
        var promiseForVideos = $.getJSON(url + '?callback=?');
        var self = this;
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
                return videoTemplate(videoModel);
            }).join('');

            $('#' + idElement).html(html);
        });
    };


    window.Video.prototype.displayVideosOfUser = function (user) {
        var url = "http://vimeo.com/api/v2/" + user + "/videos.json";
        displayVideosFromVimeos(url, this.videoTemplate, this.idElement);
    };

    window.Video.prototype.displayVideosOfChannel = function (idChannel) {
        var url = "http://vimeo.com/api/v2/channel/" + idChannel + "/videos.json";
        displayVideosFromVimeos(url, this.videoTemplate, this.idElement);
    }

})();

