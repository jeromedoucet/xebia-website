(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('agilite', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);