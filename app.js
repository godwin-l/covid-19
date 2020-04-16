var express = require('express');
var path = require('path');
var token = require('./controllers/dataController');
const covid = require('novelcovid');
const fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', token);

app.get('/', function(req, res) {
    res.send("<h1>Available end points:</h1></br></br><a href=/v1/all>Global states</a></br><a href=/v1/countries>Country wise stats</a></br><a href=/v1/yesterday>Yesterday stats</a></br><a href=/v1/allhistorical>Global historical stats</a></br><a href=/v1/historical>Country wise historical stats</a></br><a href=/v1/states>State wise stats</a></br><a href=/v1/affectedcountries>Affected countries</a></br>")
});

app.listen(port, () => {
    console.log("Listening on localhost")
});

module.exports = app;