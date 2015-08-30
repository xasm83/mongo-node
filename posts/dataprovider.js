function postsDao(db) {
    this.readPosts = function () {
    };

    this.readPost = function (postId, callback) {
        var collection = db.collection('backboneCollection');
        collection.findOne({id: parseInt(postId)}, function (err, doc) {
            callback(doc);
        });
    };

    this.readPosts = function (callback) {
        var collection = db.collection('backboneCollection');
        collection.find().toArray(function (err, doc) {
            callback(doc);
        });
    };

    this.writePost = function (post, callback) {
        var collection = db.collection('backboneCollection');
        collection.update({id: parseInt(post.id)}, post, {upsert: true}, callback);
    }
}

exports.postsDao = postsDao;

