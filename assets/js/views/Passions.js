define(['text!/assets/tmpl/passions.html'], function (source) {
    return Backbone.View.extend({
    	el: '#passions > .content',
    	template: Handlebars.compile(source),
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
    	},
    	render: function() {
    		
    	}
    });
});