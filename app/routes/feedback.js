var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res){
   
   var data = req.app.get('appData');
   var photos = [];
   var pageData = data.speakers;
   data.speakers.forEach(function(item){
      photos = photos.concat(item.artwork);
   });
   
   res.render('feedback',{
      pageTitle: 'Jijo Created',
      pageId: 'feedback'
   });
});

module.exports = router;