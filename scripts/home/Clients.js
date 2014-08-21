(function (TEMPLATES, clients) {

    var slurp = function (str) {
        return str.replace(/\s/g, '-').replace(/['.]/g, '_').replace(/[ô]/g, 'o').replace(/[éè]/g, 'e').replace(/\+/g, '_plus').toLowerCase()
    };

    $(function () {


        var clientTemplate = TEMPLATES['client'];

        var html = clients.map(function (client, idx) {
            return clientTemplate({
                name: client.name,
                slurpedName: slurp(client.name),
                idx: idx
            });
        }).join('');


        var $clientsLogo = $('#clients-logo');
        $clientsLogo.append(html);

        var $clientLogo = $('.client-logo');
        var sizeOfLogo = $clientLogo.outerWidth(true);
        var countOfLogo = $clientLogo.length;

        var nbToDisplay = Math.round($('.client-list-wrapper').width() / sizeOfLogo);

        var maxLeft = (countOfLogo - countOfLogo % nbToDisplay) * sizeOfLogo;
        var offset = nbToDisplay * sizeOfLogo;

        var carrousel = {
            currentPosition: 0,
            moveLeft: function () {
                var newPosition = this.currentPosition + offset;
                if (newPosition > 0) {
                    newPosition = -maxLeft;
                }

                this.move(newPosition);
            },
            moveRight: function () {
                var newPosition = this.currentPosition - offset;
                if (newPosition < -maxLeft) {
                    newPosition = 0;
                }

                this.move(newPosition);
            },
            move: function (newPosition) {
                this.currentPosition = newPosition;
                $clientsLogo.css('left', newPosition);
            }
        };

        $('.before-button').click(function () {
            carrousel.moveLeft();
        });

        $('.after-button').click(function () {
            carrousel.moveRight();
        });

    });
})(window.TEMPLATES, window.CLIENTS);