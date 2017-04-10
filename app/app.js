var express = require('express');

var app = express();

var dataFile = require('./data/data.json');


app.get('/', function(req, res){
   res.send(`
        <h1> Express Project Jijo </h1>
        <p> This is an node based express project </p>
   `); 
});

app.get('/speakers', function(req, res){
    
    var info = '';
    
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
    `);
});

app.get('/speakers/:speakerid', function(req, res){
    

    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1> ${speaker.name} </h1>
        <p> ${speaker.summary} </p>
    `);
});

app.listen(process.env.PORT, process.argv.IP);