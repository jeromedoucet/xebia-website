(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('mobilite', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);