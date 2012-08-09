define(['text!/assets/tmpl/believes.html'], function (source) {
    return Backbone.View.extend({
    	el: '#believes > .content',
    	template: Handlebars.compile(source),

        nbGaletsDisplayed:0,
        leftOffset:[-10, 65, -42, 70],
        topOffset:[0, 150, 280, 410],

        initialize:function () {
            $(this.template()).appendTo(this.$el);

            var self = this;
            $("#believes").click(function () {
                self.displayNextGalet();
            });
        },
        render:function () {

        },
        displayNextGalet:function () {
            if (this.nbGaletsDisplayed == 4) {
                alert("TODO : display thanks message");
                $("#believes").unbind("click");
                return;
            }

            var galet = $("#galet" + (this.nbGaletsDisplayed + 1)).show();
            var position = galet.position();

            galet.css({
                left:this.leftOffset[this.nbGaletsDisplayed] + position.left,
                top:$("#galets").height() - this.topOffset[this.nbGaletsDisplayed]
            });
            galet.addClass("galetEnd");

            this.nbGaletsDisplayed++;
        }
    });
});