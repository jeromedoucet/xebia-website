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
