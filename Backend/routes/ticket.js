var express = require('express');
var router = express.Router();

var controller = require('../controllers/TicketController');

router.get('/ticket', controller.getTicketPage);
router.post('/submit_ticket', controller.submitTicketPage);

module.exports = router;