var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {

    var Id = req.params.id;
    var books = require('google-books-search');

    books.search(Id, function(error, results) {
        if ( ! error ) {
            console.log(results)
        } else {
            console.log(error)
        }
        if(results.length>0){
            res.render('sub', { result: results,value:0});
        }
        else {
            console.log('no item found');
            res.render('sub', { result: results,value:1});
        }
    });



});

router.get('/', function (req, res, next) {
    res.render('index');
});
module.exports = router;
