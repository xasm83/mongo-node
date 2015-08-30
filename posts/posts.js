var PostsDao = require('./dataprovider').postsDao;

function postHandler(db) {

    var postsDao = new PostsDao(db);

    this.readPosts = function (req, res) {
        postsDao.readPosts(function callback(posts) {
            res.json(posts);
        });
    };

    this.readPost = function (req, res) {
        postsDao.readPost(req.params.postId, function callback(post) {
            res.json(post);
        });
    };

    this.writePost = function (req, res) {
        postsDao.writePost(req.body, function callback() {
            res.redirect('/posts/' + req.params.postId);
        });
    }
}

exports.postHandler = postHandler;