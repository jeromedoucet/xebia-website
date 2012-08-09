define(['text!/assets/tmpl/sharing.html'], function (source) {
    return Backbone.View.extend({
    	el: '#sharing > .content',
    	template: Handlebars.compile(source),

        $boudha:null,
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
            blog: [229, 220],
            book: [-235, -420],
            contrat: [-245, 330],
            techevent: [241, -310]
        },

        $slide:null,
        slideOffset: null,

        $spot: null,
        spotDisplayed:false,
        spotRadius: 230,


    	initialize: function() {           
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$boudha = this.$el.find('.boudha');
            this.$rays = this.$el.find('.rays');
            this.$slide = $('#slidingSpacesOuterDiv_sharing');
            this.$spot = this.$el.find('.spot');
            this.$hands = this.$el.find('.hand');
    	},

    	render: function() {
    		this.onWindowResize();
            this.onMouseEnter();
            $(window).on('resize', {self:this}, this.onWindowResize);
            this.$slide.on('mouseenter', {self:this}, this.onMouseEnter);
            this.$slide.on('mouseleave', {self:this}, this.onMouseLeave);
    	},

        remove: function() {
            $(window).off('resize', this.onWindowResize);
            this.$slide.off();
            this.$el.remove();
        },

        saveSlideOffset:function(){
            this.slideOffset = this.$slide.offset();
        },

        centerElements: function(){
            var vCenter = $(window).height()/2, hCenter = $(window).width()/2 

            this.$boudha.css({
                left : hCenter - this.boudaWidth/2,
                top : vCenter - this.boudaHeight/2
            });

            this.$rays.css({
                left : hCenter - this.rayonWidth/2,
                top : vCenter - this.rayonHeight/2 - 24 // TMP : Valeur magic pour pallier le décalage des rayons
            });

            var self = this;
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
                self.$spot.css('opacity', 1);
                self.spotDisplayed = true;
            }

            self.$spot.css({
                left: event.pageX - self.slideOffset.left - self.spotRadius,
                top: event.pageY - self.slideOffset.top - self.spotRadius
            });
        }
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