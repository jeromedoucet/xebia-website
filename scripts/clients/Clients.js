(function (TEMPLATES, clients) {

    $(function () {

        var clientTemplate = TEMPLATES['client'];

        new Client(clientTemplate, 'clients-logo').displayIn(clients);

    });
})(window.TEMPLATES, window.CLIENTS);