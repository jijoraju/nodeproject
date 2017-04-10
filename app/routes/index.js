var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   
   var data = req.app.get('appData');
   var photos = [];
   data.speakers.forEach(function(item){
      photos = photos.concat(item.artwork);
   });
   
   res.render('index', {
      pageTitle : 'Jijo Created',
      artwork: photos,
      pageId : 'home'
   });
});

module.exports = router;