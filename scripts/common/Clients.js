(function () {
    var slurp = function (str) {
        return str.replace(/\s/g, '-').replace(/['.]/g, '_').replace(/[ô]/g, 'o').replace(/[éè]/g, 'e').replace(/\+/g, '_plus').toLowerCase()
    };
    window.Client = function (clientTemplate) {
        this.clientTemplate = clientTemplate;
    };

    window.Client.prototype.displayIn = function (clients, idElement) {
        var html = clients.map(function (client, idx) {
            return this.clientTemplate({
                name: client.name,
                slurpedName: slurp(client.name),
                idx: idx
            });
        }, this).join('');


        $('#' + idElement).append(html);
    }
})();