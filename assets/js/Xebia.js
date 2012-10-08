requirejs.config({
    paths:{
        'jquery':'lib/jquery.min',
        'jquery.quickeach':'lib/jquery.quickeach',
        'jquery.circlemouse':'lib/jquery.circlemouse',
        'modernizr':'lib/modernizr.custom.72835',
        'jquery.easing':'lib/jquery.easing',
        'jquery.ferro':'lib/jquery.ferro',
        'backbone':'lib/backbone.min',
        'underscore':'lib/underscore.min',
        'less':'lib/less.min',
        'handlebars':'lib/handlebars',
        'router':'Router',
        'turnjs':'lib/turn-3.min',
        'jquery.parallax':'lib/jquery.parallax.min',
        'slides':'lib/slides.min.jquery',
        'jqdock':'lib/jquery.jqdock.min'
    },
    shim:{
        'backbone':{ deps:['jquery', 'underscore'] },
        'jquery.easing':{ deps:['jquery'] },
        'jquery.ferro':{ deps:['jquery.easing'] },
        'router':{ deps:['backbone'] },
        'jquery.parallax':{ deps:['jquery'] },
        'slides':{ deps:['jquery'] },
        'jqdock':{ deps:['jquery'] }
    }
});

require(['router', 'jquery', 'underscore', 'backbone', 'handlebars', 'less', 'jquery.easing', 'jquery.ferro'],
    function (Router) {
        // onClose method available for views
        Backbone.View.prototype.close = function () {
            if (this.onClose) {
                this.onClose();
            }
        }

        new Router();
        Backbone.history.start();

        var $loaderContainer = $('#percent-container');
        var $percent = $('#percent');
        var $imgs = $('img');
        var nbElToPreload = $imgs.length, nbElPreloaded = 0;
        $imgs.hide();
        $loaderContainer.show();
        $imgs.each(function (idx, item){
            var img = new Image();
            img.onload = function()
            {
                if (++nbElPreloaded == nbElToPreload){
                    $imgs.show();
                    $loaderContainer.fadeOut('slow');
                }
                $loaderContainer.append('<div style="text-align:left;">> '+this.src+'</div>');
                var percentVal = nbElPreloaded / nbElToPreload *100;
                $percent.html(parseInt(percentVal) +"%");
                $percent.width(percentVal+"%");

            }
            img.src = $(item).attr('src');
        });
    }
);