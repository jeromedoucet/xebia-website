(function ($, exp) {
    var Blog = function Blog(template) {
        this.template = template;
    };

    var displayBlogArticle = function (url, template, idContainer) {
        var promiseForBlog = $.ajax(url, {
            dataType: 'jsonp'
        });


        promiseForBlog.done(function (blogResponse) {
            var posts = blogResponse.posts;

            var htmls = posts.map(function (post) {
                if (!post) {
                    return '';
                }

                var description = post.excerpt.replace(/\s\[(.*)]/g, '$1').split(' ').slice(0, 30).join(' ') + '...';

                var blogViewModel = {
                    title: post.title,
                    name: post.author ? post.author.name : '',
                    date: post.date ? moment(post.date).format('DD MMMM YYYY') : '',
                    description: description,
                    url: post.url
                };

                return template(blogViewModel)
            }).join('');

            $('#' + idContainer).html(htmls);
        });
    };

    Blog.prototype.displayIn = function (idContainer) {
        var urlApiBlog = 'http://blog.xebia.fr/wp-json-api/get_recent_posts/?count=3';
        displayBlogArticle(urlApiBlog, this.template, idContainer);
    };

    Blog.prototype.displayCategoryIn = function (category, idContainer) {
        var urlApiBlog = 'http://blog.xebia.fr/wp-json-api/get_category_posts/?slug=' + category + '&count=3';
        displayBlogArticle(urlApiBlog, this.template, idContainer);
    };

    exp.Blog = Blog;

})($, window);
