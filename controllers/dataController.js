var express = require('express');
var router = express.Router();
var dataService = require('../services/dataService');

router.get('/all', function(req, res) {
    dataService.getData(req, res);
})


module.exports = router;