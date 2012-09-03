define(['text!/assets/tmpl/believes.html'], function (source) {
    return Backbone.View.extend({
    	el: '#believes > .content',
    	template: Handlebars.compile(source),

        nbGaletsDisplayed: 0,
        leftOffset: [50, 125, 22, 130],
        topOffset: [380, 230, 100, -30],
        rayonWidth: 1828,
        rayonHeight: 914,

        initialize: function () {
            _.bindAll(this);           

            $(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();

            var self = this;
            $("#believes").click(function () {
                self.displayNextGalet();
            });
            
            this.$galetsWrapper = $('#galets');
            this.$rays = this.$el.find('.rayons');            
        },
        render: function () {
           this.onWindowResize();                   
           $(window).bind('resize', this.onWindowResize);
        },
        onClose: function() {
           $(window).unbind('resize', this.onWindowResize);
        },  
        displayNextGalet: function () {

            var galet = $("#galet" + (this.nbGaletsDisplayed + 1)).show();
            var position = galet.position();

            galet.css({
                left:this.leftOffset[this.nbGaletsDisplayed],
                top:this.topOffset[this.nbGaletsDisplayed]
            });
            galet.addClass("galetEnd");

            this.nbGaletsDisplayed++;

            if (this.nbGaletsDisplayed == 4) {
                this.$(".nowYouKnow").fadeIn(4000);
                $("#believes").unbind("click");
            }
        },
        onWindowResize: function() {
           var windowHeight = $(window).height(), windowWidth = $(window).width() 
           
           this.$galetsWrapper.css({
               left : (windowWidth - this.$galetsWrapper.width())/2,
               top : (windowHeight - this.$galetsWrapper.height())/2
           });

           this.$rays.css({
               left : (windowWidth - this.rayonWidth)/2,
               top : (windowHeight - this.rayonHeight)/2
           });
        }
    });
});