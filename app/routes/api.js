var express = require('express');
var router = express.Router();
var parser = require('body-parser');
var fs = require('fs');

var apiData = require('../data/feedback.json');


router.get('/api', function(req, res){
   res.json(apiData);
});

router.use(parser.json());
router.use(parser.urlencoded({ extended: false}));

router.post('/api', function(req, res){
    apiData.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(apiData), 'utf8', function(err){
        if(err){
            console.log(err);
        }
    });
    res.json(apiData);
});
router.delete('/api/:id', function(req, res){
    apiData.splice(req.params.id, 1);
    fs.writeFile('app/data/feedback.json', JSON.stringify(apiData), 'utf8', function(err){
        if(err){
            console.log(err);
        }
    });
    res.json(apiData);
});


module.exports = router;