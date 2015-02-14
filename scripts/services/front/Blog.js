(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('woa', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);