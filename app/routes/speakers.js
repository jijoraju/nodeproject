
var express = require('express');
var router = express.Router();


router.get('/speakers', function(req, res){
    
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item){
       
       info += `
            <li>
                <h2>  ${item.name} </h2>
                <p>   ${item.summary} </p>
            </li>
       `;
    });
    
    res.send(`
        <h1> Just Started my server </h1>
        ${info}
        <script src='/reload/reload.js'></script>
    `);
});

router.get('/speakers/:speakerid', function(req, res){
    
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1> ${speaker.name} </h1>
        <p> ${speaker.summary} </p>
        <script src='/reload/reload.js'></script>
    `);
});

module.exports = router;