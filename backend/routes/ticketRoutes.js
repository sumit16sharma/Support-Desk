const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getTickets, createTicket } = require('../cantrollers/ticketCantroller');

router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;
