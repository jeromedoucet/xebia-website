(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {
        new Blog(blogTemplate).displayCategoryIn('devops', 'blog-articles-wrapper');
    });
})(window.TEMPLATES);