(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('nosql', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);