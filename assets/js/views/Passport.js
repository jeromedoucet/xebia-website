define(['text!/assets/tmpl/passport.html','turnjs'], function (source) {
    return Backbone.View.extend({
    	el: '#passport > .content',
    	template: Handlebars.compile(source),
        events: {
        },passport: {
            width: 860,
            height: 618
        },
    	initialize: function() {
            _.bindAll(this);

            $(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$passportWrapper = $('#passport-wrapper');
            this.$passport = $('#passport-container');

            this.$passport.turn({gradients: true, acceleration: true});
            this.$passport.bind("turning", function(event, page, view){
                $("[id^=bar]").removeClass("current");
                switch(page){
                    case 1:
                        $("#bar1").addClass("current");
                        break;
                    case 2:
                    case 3:
                        $("#bar2").addClass("current");
                        break;
                    case 4:
                    case 5:
                        $("#bar3").addClass("current");
                        break;
                    case 6:
                    case 7:
                        $("#bar4").addClass("current");
                        break;
                    case 8:
                        $("#bar5").addClass("current");
                        break;
                    default:
                        $("#bar1").addClass("current");
                }
            });

            var that = this;

            $("[id^=bar]").click(function () {
                that.$passport.turn("page", $(this).attr("page"));
            });

            $(".passport-next").click(function () {
                that.$passport.turn("next");
                return false;
            });

            $(".passport-prev").click(function () {
                that.$passport.turn("previous");
                return false;
            });
    	},
        render: function() {
            this.centerElements();
            $(window).bind('resize', this.centerElements);
        },
        onClose: function() {
            $(window).unbind('resize', this.centerElements);
        },
        centerElements: function() {
            this.$passportWrapper.css({
                left : ($(window).width() - this.passport.width)/2,
                top : ($(window).height() - this.passport.height)/2
            });
            $('.passport-pagination').css({
                top : ((($(window).height() - this.passport.height)/2) + this.passport.height)
            });
        }
    });
});