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

router.get('/india', function(req, res) {
    dataService.IndiaData(req, res);
})

router.get('/india/district', function(req, res) {
    dataService.IndiaStateData(req, res);
})

router.get('/india/updates', function(req, res) {
    dataService.IndiaUpdatesData(req, res);
})

router.get('/india/state_test_data', function(req, res) {
    dataService.IndiaStateTestData(req, res);
})

router.get('/india/states_daily', function(req, res) {
    dataService.IndiaStateDailyData(req, res);
})














module.exports = router;