(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayIn('blog-articles-wrapper');
    });
})(window.TEMPLATES);