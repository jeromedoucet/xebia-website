define(['text!/assets/tmpl/sharing.html',
        'modernizr', 
        'jquery.circlemouse'], 

function (source) {
    return Backbone.View.extend({
    	el: '#sharing > .content',
    	template: Handlebars.compile(source),

        $shiva:null,
        boudaWidth: 648,
        boudaHeight: 601,
        $rays:null,
        rayonWidth: 1451,
        rayonHeight: 909,

        $hands:null,

        /* The first cell is the top offset and,
         * the second the left offset from center of window
         */
        offsetHands: { 
            blog: [142, 160],
            book: [-325, -485],
            contrat: [-315, 250],
            techevent: [151, -375]
        },

        $slide:null,
        slideOffset: null,

        $spot: null,
        spotDisplayed:false,
        spotRadius: 230,

        circleMouseHandler:null,


    	initialize: function() {           
            $(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$slide = $('#slidingSpacesOuterDiv_sharing');
            this.$shiva = this.$el.find('.shiva');
            this.$rays = this.$el.find('.rays');
            this.$spot = this.$el.find('.spot');
            this.$hands = this.$el.find('.hand');
    	},

    	render: function() {
    		this.onWindowResize();
            this.onMouseEnter();
            $(window).on('resize', {self:this}, this.onWindowResize);
            this.$slide.on('mouseenter', {self:this}, this.onMouseEnter);
            this.$slide.on('mouseleave', {self:this}, this.onMouseLeave);
            this.$hands.circlemouse({
                onMouseEnter: this.onMouseEnterInHandZone,
                onMouseLeave: this.onMouseLeaveOutHandZone,
                context : this
            });
    	},

        onClose: function() {
            $(window).off('resize', this.onWindowResize);
            this.$slide.off();
            this.$hands.off().removeData('inside, cursor, circlemouse');
            //this.$el.remove();
        },

        saveSlideOffset:function(){
            this.slideOffset = this.$slide.offset();
        },

        centerElements: function(){
            var self = this, vCenter = $(window).height()/2, hCenter = $(window).width()/2 

            // center shiva
            this.$shiva.css({
                left : hCenter - this.boudaWidth/2,
                top : vCenter - this.boudaHeight/2
            });

            // center rays
            this.$rays.css({
                left : hCenter - this.rayonWidth/2,
                top : vCenter - this.rayonHeight/2 - 24 // TMP : Valeur magic pour pallier le décalage des rayons
            });

            // place icones
            $.each(this.offsetHands, function(handClass, offset) { 
                var $hand = self.$el.find('.'+handClass);
                if ($hand.length > 0){
                    $hand.css({
                        top : vCenter + offset[0],
                        left : hCenter + offset[1]
                    });
                }
            });
        },

        /*********************************
         * Event Handlers
         */
        onWindowResize: function(event){
            var self = getView(this, event);
            self.centerElements();
            self.saveSlideOffset();
        },
        onMouseEnter: function (event){
            var self = getView(this, event);
            self.$slide.on('mousemove', {self:self}, self.attachSpotToMouse);
        },
        onMouseLeave: function (event){
            var self = getView(this, event);
            self.$spot.css('opacity', 0);
            self.spotDisplayed = false;
            self.$slide.off('mousemove', self.attachSpotToMouse);
        },
        attachSpotToMouse: function (event){
            var self = event.data.self;

            if (!self.spotDisplayed){
                self.saveSlideOffset();
                self.$spot.css('opacity', 1);
                self.spotDisplayed = true;
            }

            self.$spot.css({
                left: event.pageX - self.slideOffset.left - self.spotRadius,
                top: event.pageY - self.slideOffset.top - self.spotRadius
            });
        },

        /**
         * Non-convential JQuery event Handlers for JQuery.CircleMouse
         * We can't use 'this' for retrieve current DOM element, 'this' in this case
         * is the circleMouse plugin. To retrieve the backbone view, we use 'self'.
         */
        onMouseEnterInHandZone: function (event, el, self){
            self.$slide.off('mousemove', self.attachSpotToMouse);
            var offset = el.offset();
            self.$spot.addClass('magnetized');
            self.$spot.css({
                left: offset.left - self.slideOffset.left + el.width()/2 - self.spotRadius,
                top: offset.top - self.slideOffset.top + el.height()/2 - self.spotRadius
            });
        },
        onMouseLeaveOutHandZone: function (event, el, self){
            self.onMouseEnter();
            self.$spot.removeClass('magnetized');
        },
    });

    /* 
     * This method return self if it's the view else it 
     * return a "self" variable passed when we add handler, 
     * like this:
     * 
     * $('#...').on('anEvent', {self:this}, this.myHandler);
     */
    function getView(self, event){
        return (self instanceof Backbone.View) ? self : event.data.self;
    }
});