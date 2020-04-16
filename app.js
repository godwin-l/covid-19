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
    res.send("<html><head><script type='text/javascript'>var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:'9a5a3103770e3c7b4dd166f3e4987a3049cba105c89dba9b0f7cd109fc876e02a81d6b547a35c109951d24f6be71d2d0', values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.in/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);d.write('<div id=zsiqwidget></div>');</script></head> <body> <h1>Available end points:</h1></br></br><a href=/v1/all>Global states</a></br><a href=/v1/countries>Country wise stats</a></br><a href=/v1/yesterday>Yesterday stats</a></br><a href=/v1/allhistorical>Global historical stats</a></br><a href=/v1/historical>Country wise historical stats</a></br><a href=/v1/states>State wise stats</a></br><a href=/v1/affectedcountries>Affected countries</a></br></body></html>");
});

app.listen(port, () => {
    console.log("Listening on localhost")
});

module.exports = app;