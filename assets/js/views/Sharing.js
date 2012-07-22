define(['text!/assets/tmpl/sharing.html'], function (source) {
    return Backbone.View.extend({
    	el: '#sharing > .content',
    	template: Handlebars.compile(source),
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
    	},
    	render: function() {
    		
    	}
    });
});