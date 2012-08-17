define(['text!/assets/tmpl/passions.html',
    'jquery.parallax',
    'slides'],
    function (source) {
    return Backbone.View.extend({
    	el: '#passions > .content',
    	template: Handlebars.compile(source),
        slides: [
            [
                { src: 'assets/img/passions/keywords_cat1_derriere.png', width: 978, height: 540 },
                { src: 'assets/img/passions/keywords_cat1_milieu.png', width: 1069, height: 622 },
                { src: 'assets/img/passions/keywords_cat1_devant.png', width: 949, height: 408 }
            ], [
                { src: 'assets/img/passions/keywords_cat2_derriere.png', width: 663, height: 318 },
                { src: 'assets/img/passions/keywords_cat2_milieu.png', width: 933, height: 547 },
                { src: 'assets/img/passions/keywords_cat2_devant.png', width: 631, height: 546 }
            ], [
                { src: 'assets/img/passions/keywords_cat3_derriere.png', width: 1111, height: 670 },
                { src: 'assets/img/passions/keywords_cat3_milieu.png', width: 1103, height: 584 },
                { src: 'assets/img/passions/keywords_cat3_devant.png', width: 902, height: 649 }
            ], [
                { src: 'assets/img/passions/keywords_cat4_derriere.png', width: 1046, height: 425 },
                { src: 'assets/img/passions/keywords_cat4_milieu.png', width: 907, height: 434 },
                { src: 'assets/img/passions/keywords_cat4_devant.png', width: 587, height: 530 }
            ],
            [
                { src: 'assets/img/passions/keywords_cat5_derriere.png', width: 751, height: 580 },
                { src: 'assets/img/passions/keywords_cat5_milieu.png', width: 1084, height: 602 },
                { src: 'assets/img/passions/keywords_cat5_devant.png', width: 799, height: 500 }
            ]
        ],
        blackboard: {
            width: 1114,
            height: 627
        },
    	initialize: function() {
            _.bindAll(this);

            $(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$slidesWrapper = $('#slides-wrapper');
            this.$slides = $('.slides-container');

            var that = this;
            $.each(this.slides, function (indexSlide) {
                // Construct blackboard and images
                that.addSlide(this, indexSlide);

                // Parallax
                that.$('#slide' + indexSlide + ' .parallax-layer').parallax({
                    mouseport: $('#slide' + indexSlide),
                });
            });

            // Slides
            this.$slidesWrapper.slides({
                container: 'slides-container',
                prev: 'prev',
                next: 'next'
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
            this.$slidesWrapper.css({
                left : ($(window).width() - this.blackboard.width)/2,
                top : ($(window).height() - this.blackboard.height)/2
            });
        },
        addSlide: function(slide, indexSlide) {
            this.$slides.append('<div class="blackboard parallax-viewport" id="slide' + indexSlide +'"></div>');

            var that = this;
            $.each(slide, function () {
                that.addParallaxLayer(this, indexSlide);
            });
        },
        addParallaxLayer: function(layer, indexSlide) {
            var imgCode = '<img class="parallax-layer" style="width:' + layer.width + 'px; height:' + layer.height + 'px;" src="' + layer.src + '" alt="" />';
            $('#slide' + indexSlide).append(imgCode);
        }
    });
});