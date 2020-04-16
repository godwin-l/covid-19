var express = require('express');
var router = express.Router();
var dataService = require('../services/dataService');

router.get('/', function(req, res) {
    dataService.getBase(req, res);
})

router.get('/all', function(req, res) {
    dataService.getAll(req, res);
})

router.get('/countries', function(req, res) {
    dataService.getCountries(req, res);
})

router.get('/states', function(req, res) {
    dataService.getStates(req, res);
})

router.get('/yesterday', function(req, res) {
    dataService.getYesterday(req, res);
})

router.get('/historical', function(req, res) {
    dataService.getHistorical(req, res);
})

router.get('/allhistorical', function(req, res) {
    dataService.getAllhistorical(req, res);
})

router.get('/affectedCountries', function(req, res) {
    dataService.getCountryNames(req, res);
})










module.exports = router;