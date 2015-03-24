(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('cloud', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);
