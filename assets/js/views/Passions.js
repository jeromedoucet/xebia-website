define(['text!/assets/tmpl/passions.html',
    'jquery.parallax',
    'slides'],
    function (source) {
    return Backbone.View.extend({
    	el: '#passions > .content',
    	template: Handlebars.compile(source),
        slides: [
            [
                {
                    src: 'assets/img/passions/keywords_cat1_derriere.png',
                    width: 978,
                    height: 540
                },
                {
                    src: 'assets/img/passions/keywords_cat1_milieu.png',
                    width: 1069,
                    height: 622
                },
                {
                    src: 'assets/img/passions/keywords_cat1_devant.png',
                    width: 949,
                    height: 408
                }
            ],
            [
                {
                    src: 'assets/img/passions/keywords_cat2_derriere.png',
                    width: 663,
                    height: 318
                },
                {
                    src: 'assets/img/passions/keywords_cat2_milieu.png',
                    width: 933,
                    height: 547
                },
                {
                    src: 'assets/img/passions/keywords_cat2_devant.png',
                    width: 631,
                    height: 546
                }
            ],
            [
                {
                    src: 'assets/img/passions/keywords_cat3_derriere.png',
                    width: 1111,
                    height: 670
                },
                {
                    src: 'assets/img/passions/keywords_cat3_milieu.png',
                    width: 1103,
                    height: 584
                },
                {
                    src: 'assets/img/passions/keywords_cat3_devant.png',
                    width: 902,
                    height: 649
                }
            ],
            [
                {
                    src: 'assets/img/passions/keywords_cat4_derriere.png',
                    width: 1046,
                    height: 425
                },
                {
                    src: 'assets/img/passions/keywords_cat4_milieu.png',
                    width: 907,
                    height: 434
                },
                {
                    src: 'assets/img/passions/keywords_cat4_devant.png',
                    width: 587,
                    height: 530
                }
            ],
            [
                {
                    src: 'assets/img/passions/keywords_cat5_derriere.png',
                    width: 751,
                    height: 580
                },
                {
                    src: 'assets/img/passions/keywords_cat5_milieu.png',
                    width: 1084,
                    height: 602
                },
                {
                    src: 'assets/img/passions/keywords_cat5_devant.png',
                    width: 799,
                    height: 500
                }
            ]
        ],
        tableau: {
            width: 1114,
            height: 627
        },
    	initialize: function() {
            $(this.template()).appendTo(this.$el).hide().fadeIn().slideDown();
            this.$slides = $('#blackboard-slides');

            var that = this;
            $.each(this.slides, function (indexCat) {
                that.addCat(this, indexCat);
            });

            // Parallax
            for(var i=0; i<this.slides.length; i++) {
                this.$('#cat' + i + ' .parallax-layer').parallax({
                    mouseport: jQuery('#cat' + i)
                });
            }

            // Slides
            this.$slides.slides({
                prev: 'prev',
                next: 'next'
            });
    	},
        render: function() {
            this.onWindowResize();
            $(window).on('resize', {self:this}, this.onWindowResize);
        },
        onWindowResize: function(event){
            var self = getView(this, event);
            self.centerElements();
        },
        centerElements: function() {
            var self = this, vCenter = $(window).height()/2, hCenter = $(window).width()/2 

            this.$slides.css({
                left : hCenter - this.tableau.width/2,
                top : vCenter - this.tableau.height/2
            });
        },
        addCat: function(cat, indexCat) {
            var dimTableau = {
                width: 1114,
                height: 627
            };

            $('.slides_container').append('<div class="blackboard"><div class="parallax-viewport" id="cat' + indexCat +'"></div></div>');

            $.each(cat, function () {
                var divCode = '<div class="parallax-layer" style="width:' + this.width + 'px; height:' + this.height + 'px;">'
                            + '<img src="' + this.src + '" alt="" style="top:' + (dimTableau.height - this.height)/2 + 'px; left:' + (dimTableau.width - this.width)/2 + 'px;" />'
                            + '</div>';
                $('#cat' + indexCat).append(divCode);
            });
        }
    });


    /* 
     * This method return self if it's the view else it 
     * return a "self" variable passed when we add handler, 
     * like this:
     * 
     * $('#...').on('anEvent', {self:this}, this.myHandler);
     */
    function getView(self, event){
        return (self instanceof Backbone.View) ? self : event.data.self;
    }
});