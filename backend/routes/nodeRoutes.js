const express = require('express');
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require('../cantrollers/noteCantroller');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getNotes).post(protect, addNote);

module.exports = router;
