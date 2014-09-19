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

        return !!event && !!event.title && startDate.valueOf() > now && event.status == 'Live';
    };

    $(function () {
        Eventbrite({'app_key': 'UW2IBMBZKW4U6EPHQK'}, function (ebClient) {
            //http://developer.eventbrite.com/doc/organizers/organizer_list_events/
            ebClient.organizer_list_events({id: 1627902102, only_display: 'url, status, start_date, title, logo'}, function (response) {
                var content;

                var events = response.events;

                if (events && events.length > 0) {
                    var nextEvents = events.filter(isEventDisplayable).slice(0, 3);

                    if (nextEvents.length > 0) {
                        content = nextEvents.map(eventToHtml).join('');
                    }
                }

                if (!content) {
                    content = "Il n'y a pas d'événement à afficher pour l'instant";
                }
                $('#events-wrapper').html(content);
            });
        });
    });
})(window.Eventbrite, window.TEMPLATES, window.moment);
