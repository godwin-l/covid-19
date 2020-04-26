var express = require('express');
var path = require('path');
var token = require('./controllers/dataController');
const covid = require('novelcovid');

var app = express();
var port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', token);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log("Listening on localhost")
});

module.exports = app;