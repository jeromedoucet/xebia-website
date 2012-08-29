requirejs.config({
    paths:{
        'jquery':'lib/jquery.min',
        'jquery.quickeach':'lib/jquery.quickeach',
        'jquery.circlemouse':'lib/jquery.circlemouse',
        'modernizr': 'lib/modernizr.custom.72835',
        'jquery.easing': 'lib/jquery.easing',
        'jquery.ferro': 'lib/jquery.ferro',
        'backbone':'lib/backbone.min',
        'underscore':'lib/underscore.min',
        'less':'lib/less.min',
        'handlebars': 'lib/handlebars',
        'router': 'Router',
        'turnjs':'lib/turn-3.min',
        'jquery.parallax':'lib/jquery.parallax.min',
        'slides':'lib/slides.min.jquery'
    },
    shim:{
        'backbone':{ deps:['jquery', 'underscore'] },
        'jquery.easing':{ deps:['jquery'] },
        'jquery.ferro':{ deps:['jquery.easing'] },
        'router':{ deps:['backbone'] },
        'jquery.parallax':{ deps: ['jquery'] },
        'slides':{ deps: ['jquery'] }
    }
});

require(['router','jquery','underscore','backbone','handlebars','less','jquery.easing','jquery.ferro'],
    function (Router) {
        // onClose method available for views
        Backbone.View.prototype.close = function(){
            if (this.onClose) {
                this.onClose();
            }
        }

        new Router();
        Backbone.history.start();
});