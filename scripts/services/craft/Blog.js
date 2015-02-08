(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('craftsmanship', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);