define(['text!/assets/tmpl/sharing.html'], function (source) {
    return Backbone.View.extend({
    	el: '#sharing > .content',
    	template: Handlebars.compile(source),

        $bouda:null,
        boudaWidth: 1400,
        boudaHeight: 1338,
        
        $slide:null,
        slideOffset: null,

        $spot: null,
        spotDisplayed:false,
        spotRadius: 230,

    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$bouda = this.$el.find('.bouda');
            this.$slide = $('#slidingSpacesOuterDiv_sharing');
            this.$spot = this.$el.find('.spot');
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

        centerBouda: function(){
            this.$bouda.css({
                left : $(window).width()/2 - this.boudaWidth/2,
                top : $(window).height()/2 - this.boudaHeight/2
            });
        },

        /*********************************
         * Event Handlers
         */
        onWindowResize: function(event){
            var self = getView(this, event);
            self.centerBouda();
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