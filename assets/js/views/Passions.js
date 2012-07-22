define(['text!/assets/tmpl/passions.html',
    'lib/jquery.parallax.min',
    'lib/slides.min.jquery'],
    function (source) {
    return Backbone.View.extend({
    	el: '#passions > .content',
    	template: Handlebars.compile(source),
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$('.parallax-layer').parallax();
            this.$('#slides').slides({
                prev: 'prev',
                next: 'next'
            });
    	},
    	render: function() {
    	}
    });
});