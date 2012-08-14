define(['views/Passport','views/Believes','views/Passions','views/Sharing','views/Join'],
    function (Passport,Believes,Passions,Sharing,Join) {
    return Backbone.Router.extend({
        initialize: function() {
            this.createFerroSlider();
        },
        routes: {
            '!sharing': 'sharing',
            '!passions': 'passions',
            '!believes': 'believes',
            '!join-us': 'join',
            '!passeport': 'passport',
            '*path': 'passport'
        },
        passport: function() {
            if(!this._passport)
                this._passport = new Passport();
            this.showView(this._passport);
        },
        sharing: function() {
            if(!this._sharing)
                this._sharing = new Sharing();
            this.showView(this._sharing);
        },
        passions: function() {
            if(!this._passions)
                this._passions = new Passions();
            this.showView(this._passions);
        },
        believes: function() {
            if(!this._believes)
                this._believes = new Believes();
            this.showView(this._believes);
        },
        join: function() {
            if(!this._join)
                this._join = new Join();
            this.showView(this._join);
        },
        createFerroSlider: function() {
            var matrix = 
            [[{full : 0}, {full : 1}, {full : 0}],
            [{full : 1}, {full : 1,first : true}, {full : 1}],
            [{full : 0}, {full : 1}, {full : 0}]];

            $(document).ready(function() {
              $(".sliding").ferroSlider({
                axis: 'xy',
                displace: matrix,
                easing: 'easeOutExpo',
                createMap: true,
                feedbackArrows: false,
                fullScreenBackground: true,
                mapPosition: 'bottom_left',
                backGroundImageClass: 'bg',
                preloadBackgroundImages: true,
                time: 400
            });
          });
        },
        showView: function(view) {
            if (this.currentView){
                this.currentView.close();
            }

            this.currentView = view;
            this.currentView.render();
        }
    });
});