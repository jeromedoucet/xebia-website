(function (TEMPLATES, clients) {

    $(function () {

        var clientTemplate = TEMPLATES['client'];

        var client = new Client(clientTemplate, 'clients-logo');
        client.displayIn(clients);
        client.caroussel();

    });
})(window.TEMPLATES, window.CLIENTS);