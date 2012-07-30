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
        spotRadius: 230,

    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$bouda = this.$el.find('.bouda');
            this.$slide = $('#slidingSpacesOuterDiv_sharing');
            this.$spot = this.$el.find('.spot');
    	},
    	render: function() {
    		this.onWindowResize();
            //this.onMouseEnter();
            $(window).on('resize', {self:this}, this.onWindowResize);
            this.$slide.on('mouseenter', {self:this}, this.onMouseEnter);
            this.$slide.on('mouseleave', {self:this}, this.onMouseLeave);
    	},
        remove: function() {
            $(window).off('resize', this.onWindowResize);
            this.$slide.off();
            this.$el.remove();
        },

        /*********************************
         * Event Handlers
         */
        onWindowResize: function(event){
            var self = this.$bouda ? this : event.data.self;

            self.centerBouda();
            self.saveSlideOffset();
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
        onMouseEnter: function (event){
            var self = this.$bouda ? this : event.data.self;
            console.log('opacity : '+self.$spot.css('opacity'));
            if (self.$spot.css('opacity') <= 1){
                console.log('mousemove added');
                self.$spot.css('opacity', 1);
                $(window).on('mousemove', {self:self}, self.attachSpotToMouse);
            }
        },
        onMouseLeave: function (event){
            var self = this.$bouda ? this : event.data.self;
            if (self.$spot.css('opacity') >= 0){
                console.log('mousemove removed');
                $(window).off('mousemove', this.attachSpotToMouse);
                self.$spot.css('opacity', 0);
            }
        },


        attachSpotToMouse: function (event){
            var self = event.data.self;

            /*$console.group();
            console.log(event.pageX +' :: '+event.pageY);
            console.log(self.slideOffset.left +' :: '+ self.slideOffset.top);
            console.groupEnd();
            */

            self.$spot.css({
                left: event.pageX - self.slideOffset.left - self.spotRadius,
                top: event.pageY - self.slideOffset.top - self.spotRadius
            });

            // console.log(self.$spot.css('left') + " :: " + self.$spot.css('top'));
        }
    });
});