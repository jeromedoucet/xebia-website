define(['text!/assets/tmpl/sharing.html'], function (source) {
    return Backbone.View.extend({
    	el: '#sharing > .content',
    	template: Handlebars.compile(source),
        $bouda:null,
    	initialize: function() {
    		$(this.template()).appendTo(this.el).hide().fadeIn().slideDown();
            this.$bouda = $(this.el).find('.bouda');
    	},
    	render: function() {
    		this.centerBouda();
            $(window).on('resize', {self:this}, this.centerBouda);
    	},
        remove: function() {
            $(window).off('resize', {self:this}, this.centerBouda);
            this.$el.remove();
        },
        centerBouda: function(event){
            var self = this.$bouda ? this : event.data.self;
            self.$bouda.css('left',$(window).width()/2 - 700);
            self.$bouda.css('top',$(window).height()/2 - 669);
        }
    });
});