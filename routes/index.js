var express = require('express')
var router = express.Router()
var user = require('./user');
var healthcheck = require('./healthcheck');

router.use('/user', user);
router.use('/healthcheck', healthcheck);

module.exports = router