(function () {
    var slurp = function (str) {
        return str.replace(/\s/g, '-').replace(/['.]/g, '_').replace(/[ô]/g, 'o').replace(/[éè]/g, 'e').replace(/\+/g, '_plus').toLowerCase()
    };
    window.Client = function (clientTemplate, idElement) {
        this.clientTemplate = clientTemplate;
        this.idElement = idElement
    };

    window.Client.prototype.displayIn = function (clients) {
        var html = clients.map(function (client, idx) {
            return this.clientTemplate({
                name: client.name,
                slurpedName: slurp(client.name),
                idx: idx
            });
        }, this).join('');


        this.getElement().append(html);
    };

    window.Client.prototype.getElement = function() {
        return $('#' + this.idElement);
    };

    window.Client.prototype.caroussel = function () {
        var $element = this.getElement();
        var $clientLogo = $element.children();
        var sizeOfLogo = $clientLogo.outerWidth(true);
        var countOfLogo = $clientLogo.length;

        var nbToDisplay = Math.round($element.parent().width() / sizeOfLogo);


        var rest = countOfLogo % nbToDisplay;

        var maxLeft = (countOfLogo - (rest ? rest : nbToDisplay)) * sizeOfLogo;

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
                $element.css('left', newPosition);
            }
        };

        $('.before-button').click(function () {
            carrousel.moveLeft();
        });

        $('.after-button').click(function () {
            carrousel.moveRight();
        });
    }
})();