var express = require('express');
var path = require('path');
var token = require('./controllers/dataController');
const covid = require('novelcovid');
const fs = require('fs');

var app = express();
var port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/countries', token);

app.listen(port, () => {
    console.log("Listening on localhost")
});

module.exports = app;