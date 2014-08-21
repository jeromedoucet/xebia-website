(function ($) {
    window.Blog = function Blog(template) {
        this.template = template;
    };

    window.Blog.prototype.displayIn = function (idContainer) {

        var urlApiBlog = 'http://blog.xebia.fr/wp-json-api/get_recent_posts/?count=3';

        var promiseForBlog = $.ajax(urlApiBlog, {
            dataType: 'jsonp'
        });

        var self = this;
        promiseForBlog.done(function (blogResponse) {
            var posts = blogResponse.posts;

            var htmls = posts.map(function (post) {
                if (!post) {
                    return '';
                }
                var blogViewModel = {
                    title: post.title,
                    name: post.author ? post.author.name : '',
                    date: post.date ? moment(post.date).format('DD MMMM YYYY') : '',
                    description: post.excerpt.replace(/\s\[(.*)]/g, '$1'),
                    url: post.url
                };

                return self.template(blogViewModel)
            }).join('');

            $('#' + idContainer).html(htmls);
        });

    }


})($, window);
