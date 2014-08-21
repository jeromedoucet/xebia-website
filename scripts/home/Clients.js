(function (TEMPLATES, clients) {

    $(function () {

        var clientTemplate = TEMPLATES['client'];

        new Client(clientTemplate).displayIn(clients, 'clients-logo');

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
                $('#clients-logo').css('left', newPosition);
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