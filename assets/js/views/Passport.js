define(['text!/assets/tmpl/passport.html'], function (source) {
    return Backbone.View.extend({
    	el: '#passeport > .content',
    	template: Handlebars.compile(source),
        events: {
        },
    	initialize: function() {
    		$(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            $('#passport').turn({gradients: true, acceleration: true});
            $("#passport").bind("first", function(event) {
                $("#previous-page-arrow").removeClass("active-previous");
                $("#next-page-arrow").addClass("active-next");
            });
            $("#passport").bind("last", function(event) {
                $("#previous-page-arrow").addClass("active-previous");
                $("#next-page-arrow").removeClass("active-next");
            });
            $("#passport").bind("turning", function(event, page, view){
                $("[id^=bar]").removeClass("selected");
                switch(page){
                    case 1:
                        $("#bar1").addClass("selected");
                        break;
                    case 2:
                    case 3:
                        $("#bar2").addClass("selected");
                        break;
                    case 4:
                    case 5:
                        $("#bar3").addClass("selected");
                        break;
                    case 6:
                    case 7:
                        $("#bar4").addClass("selected");
                        break;
                    case 8:
                        $("#bar5").addClass("selected");
                        break;
                    default:
                        $("#bar1").addClass("selected");
                }
                if ((page != 1) && (page != 8)) {
                    $("#previous-page-arrow").addClass("active-previous");
                    $("#next-page-arrow").addClass("active-next");
                }
            });
            $("[id^=bar]").hover(
                function () {
                    $(this).addClass("active");
                },
                function () {
                    $(this).removeClass("active");
                }
            );
            $("#previous-page-arrow").hover(
                function () {
                    if ($("#passport").turn("page") != 1) {
                        $(this).addClass("hover-previous");
                    }
                },
                function () {
                    $(this).removeClass("hover-previous");
                }
            );
            $("#next-page-arrow").hover(
                function () {
                    if ($("#passport").turn("page") != 8) {
                        $(this).addClass("hover-next");
                    }
                },
                function () {
                    $(this).removeClass("hover-next");
                }
            );
            $("[id^=bar]").click(function () {
                $("#passport").turn("page", $(this).attr("page"));
            });
            $("#next-page-arrow").click(function () {
                $("#passport").turn("next");
            });
            $("#previous-page-arrow").click(function () {
                $("#passport").turn("previous");
            });
    	},
    	render: function() {

    	}
    });
});