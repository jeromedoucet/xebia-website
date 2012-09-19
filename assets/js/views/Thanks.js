define(['text!/assets/tmpl/thanks.html',
    'jqdock'],
    function (source) {
        return Backbone.View.extend({
            el:'#thanksPanel',
            events:{
                'click #tab-link':'togglePanel'
            },
            template:Handlebars.compile(source),
            initialize:function () {
                $(this.template()).appendTo(this.$el);
                $('#partners').jqDock({
                    align:'middle',
                    size:30,
                    distance:80
                });
            },
            togglePanel:function (event) {
                event.preventDefault();
                if ($(this.el).css('bottom') == '-100px') {
                    // Show panel
                    $(this.el).animate({
                        bottom:'0px'
                    }, 100);
                    $('#tab-link .arrow').addClass('down');
                } else {
                    // Hide panel
                    $(this.el).animate({
                        bottom:'-100px'
                    }, 100);
                    $('#tab-link .arrow').removeClass('down');
                }
            }
        });
    });