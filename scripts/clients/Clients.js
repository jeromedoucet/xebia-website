(function (TEMPLATES, clients) {

    $(function () {

        var clientTemplate = TEMPLATES['client'];

        new Client(clientTemplate).displayIn(clients, 'clients-logo');

    });
})(window.TEMPLATES, window.CLIENTS);