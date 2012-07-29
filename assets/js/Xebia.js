requirejs.config({
    paths:{
        'jquery':'lib/jquery.min',
        'backbone':'lib/backbone.min',
        'underscore':'lib/underscore.min',
        'less':'lib/less.min',
        'jquery.easing': 'lib/jquery.easing',
        'jquery.ferro': 'lib/jquery.ferro',
        'handlebars': 'lib/handlebars',
        'router': 'Router',
        'turnjs':'lib/turn-3.min'
    },
    shim:{
        'backbone':{ deps:['jquery', 'underscore'] },
        'jquery.easing':{ deps:['jquery'] },
        'jquery.ferro':{ deps:['jquery.easing'] },
        'router':{ deps:['backbone'] }
    }
});

require(['router','jquery','underscore','backbone','handlebars','less','jquery.easing','jquery.ferro','turnjs'],
    function (router) {
        new router();
        Backbone.history.start();
});