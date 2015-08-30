var express = require('express');
var PostHandler = require('./posts/posts').postHandler;
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/backboneDatabase", function (err, db) {
    var postHandler = new PostHandler(db);
    var app = express();
    var serveStatic = require('serve-static');

    app.use(bodyParser.json());
    app.use(serveStatic('client'));
    app.get('/posts', postHandler.readPosts);
    app.get('/posts/:postId', postHandler.readPost);
    app.post('/posts/:postId', postHandler.writePost);

    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
    });
});

