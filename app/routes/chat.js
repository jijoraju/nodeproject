var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res){
   
   res.render('chat',{
      pageTitle: 'Jijo Created',
      pageId: 'chat'
   });
});

module.exports = router;