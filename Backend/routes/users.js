var express = require('express');
var router = express.Router();

var controller = require('../controllers/UserController');

router.get('/', controller.getUserPage);

module.exports = router;