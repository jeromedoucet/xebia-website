define(['text!/assets/tmpl/thanks.html'],
    function (source) {
        return Backbone.View.extend({
            el:'#thanksPanel',
            events:{
                'click #tab-link':'togglePanel'
            },
            template:Handlebars.compile(source),
            initialize:function () {
                $(this.template()).appendTo(this.$el);
            },
            togglePanel:function (event) {
                event.preventDefault();
                if ($(this.el).css('bottom') == '-100px') {
                    // Show panel
                    $(this.el).animate({
                        bottom:'0px'
                    }, 100);
                } else {
                    // Hide panel
                    $(this.el).animate({
                        bottom:'-100px'
                    }, 100);
                }
            }
        });
    });