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
