
var express = require('express');
var router = express.Router();


router.get('/speakers', function(req, res){

    var data = req.app.get('appData');
    var photos = [];
    var pageData = data.speakers;
    data.speakers.forEach(function(item){
        photos = photos.concat(item.artwork);
    });
    
    res.render('speakers', {
        pageTitle : 'Jijo Created',
        artwork: photos,
        dataPage: pageData,
        pageId : 'speakers'
    });      

});

router.get('/speakers/:speakerid', function(req, res){
    var data = req.app.get('appData');
    var photos = [];
    var pageData = [];
    
    data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pageData.push(item);
      photos = photos.concat(item.artwork);
    }
    });
    
    res.render('speakers', {
        pageTitle : 'Jijo Created',
        artwork: photos,
        dataPage: pageData,
        pageId : 'speakers'
    });
});

module.exports = router;