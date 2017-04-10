var express = require('express');
var reload = require('reload');
var app = express();

var dataFile = require('./data/data.json');

app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(express.static('app/public'));
app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));

var server = app.listen(process.env.PORT, process.argv.IP);

reload(server, app);