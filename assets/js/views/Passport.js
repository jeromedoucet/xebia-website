define(['text!/assets/tmpl/passport.html'], function (source) {
    return Backbone.View.extend({
    	el: '#passeport > .content',
    	template: Handlebars.compile(source),
        events: {
            'click .titre_cartouche': 'click'
        },
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
    	},
    	render: function() {
    		
    	},
        click: function() {
            this.$('#flipbook').html('yop');
        }
    });
});