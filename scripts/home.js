(function (Eventbrite, TEMPLATES, moment) {
    var eventTemplate = TEMPLATES['event'];

    var eventToHtml = function (eventWrapper) {
        var event = eventWrapper.event;

        var startDate = moment(event.start_date);

        var viewModel = {
            month: startDate.format('MMM'),
            year: startDate.year(),
            day: startDate.date(),
            title: event.title,
            link: event.url
        };
        return eventTemplate(viewModel);
    };

    var isEventDisplayable = function (eventWrapper) {
        var now = new Date().getTime();

        var event = eventWrapper.event;


        var startDate = moment(event.start_date);
        //    return !!event.event.title && startDate.valueOf() > now && event.status == 'Live';
        //FIXME pour afficher des évènements
        return !!event.title && startDate.valueOf() > new Date(2014, 1, 1).getTime()

    };

    $(function () {


        Eventbrite({'app_key': 'UW2IBMBZKW4U6EPHQK'}, function (ebClient) {
            //http://developer.eventbrite.com/doc/organizers/organizer_list_events/
            ebClient.organizer_list_events({id: 1627902102, only_display: 'url, status, start_date, title, logo'}, function (response) {
                if (response.events && response.events.length > 0) {

                    var nextEvents = response.events.filter(isEventDisplayable).slice(0, 3);

                    $('#events-wrapper').html(nextEvents.map(eventToHtml).join(''));
                }
            });
        });
    });
})(window.Eventbrite, window.TEMPLATES, window.moment);

(function (TEMPLATES, moment) {

    var TrainingViewModel = function TrainingViewModel(name, title, momentDate) {

        this.name = name;
        this.photoUrl = 'images/home/jeff.jpg';
        this.session = {
            title: title,
            formattedDate: momentDate.format('dddd DD MMMM YYYY'),
            isoDate: momentDate.format()
        }
    };

    var trainingTemplate = TEMPLATES['training'];

    $(function () {

        var trainingViewModels = [
            new TrainingViewModel('Nicole Belilos', 'Agile Architecture', moment()),
            new TrainingViewModel('Nicole Belilos', 'Agile Architecture', moment()),
            new TrainingViewModel('Nicole Belilos', 'Agile Architecture', moment())
        ];
        var htmls = trainingViewModels.map(function (model) {
            return trainingTemplate(model);
        }).join('');

        $('#training-session-wrapper').html(htmls);
    });
})(window.TEMPLATES, window.moment);

(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {

        var urlApiBlog = 'http://blog.xebia.fr/wp-json-api/get_recent_posts/?count=3';
        var promiseForBlog = $.ajax(urlApiBlog, {
            dataType: 'jsonp'
        });

        promiseForBlog.done(function (blogResponse) {
            var posts = blogResponse.posts;

            var htmls = posts.map(function (post) {
                if (!post) {
                    return '';
                }
                var blogViewModel = {
                    title: post.title,
                    name: post.author ? post.author.name : '',
                    date: post.date ? moment(post.date).format('MMMM DD, YYYY') : '',
                    description: post.excerpt.replace(/\s\[(.*)]/g, '$1'),
                    url: post.url
                };

                return blogTemplate(blogViewModel)
            }).join('');

            $('#blog-articles-wrapper').html(htmls);
        });


    });
})(window.TEMPLATES);