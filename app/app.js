var express = require('express');
var reload = require('reload');
var socket = require('socket.io')();
var app = express();

var dataFile = require('./data/data.json');

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.locals.siteTitle = 'Roux Meetups';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/api.js'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/speakers.js'));
app.use(require('./routes/chat.js'));

var server = app.listen(process.env.PORT, process.argv.IP);

socket.attach(server);

socket.on('connection', function(socketio){
    socketio.on('postMessage', function(data){
        socket.emit('updateMessages', data);
    });
});

reload(server, app);