define(['text!/assets/tmpl/join.html'], function (source) {
    return Backbone.View.extend({
    	el: '#joinUs > .content',
    	template: Handlebars.compile(source),
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
    	},
    	render: function() {
    		
    	}
    });
});