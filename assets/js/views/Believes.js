define(['text!/assets/tmpl/believes.html'], function (source) {
    return Backbone.View.extend({
    	el: '#believes > .content',
    	template: Handlebars.compile(source),
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
    	},
    	render: function() {
    		
    	}
    });
});