(function (TEMPLATES) {
    var blogTemplate = TEMPLATES['blog'];

    $(function () {

        var urlApiBlog = 'http://blog.xebia.fr/wp-json-api/get_recent_posts/?count=3';
        var promiseForBlog = $.ajax(urlApiBlog, {
            dataType: 'jsonp'
        });

        promiseForBlog.done(function (blogResponse) {
            var posts = blogResponse.posts;

            var htmls = posts.map(function (post) {
                if (!post) {
                    return '';
                }
                var blogViewModel = {
                    title: post.title,
                    name: post.author ? post.author.name : '',
                    date: post.date ? moment(post.date).format('MMMM DD, YYYY') : '',
                    description: post.excerpt.replace(/\s\[(.*)]/g, '$1'),
                    url: post.url
                };

                return blogTemplate(blogViewModel)
            }).join('');

            $('#blog-articles-wrapper').html(htmls);
        });


    });
})(window.TEMPLATES);