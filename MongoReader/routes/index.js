var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Hello world
router.get('/hello', function(req,res){
    res.render('helloworld', {title: 'Hello World!'});
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET Userlist page. */
router.get('/motm', function(req, res) {
    var db = req.db;
    var collection = db.get('motm_articles');
    collection.find({},{},function(e,docs){
        res.render('motm', {
            "motm_articles" : docs
        });
    });
});
module.exports = router;
