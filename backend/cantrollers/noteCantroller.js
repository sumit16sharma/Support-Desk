const asyncHandler = require('express-async-handler');
const Note = require('../models/nodeModel');
const Ticket = require('../models/ticketModel');
const User = require('../models/userModel');

// @desc    Get notes for a ticket
// @route   GET /api/tickets/:ticketId/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not Found');
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (req.user.id !== ticket.user.toString()) {
    res.status(401);
    throw new Error('User not Authorised');
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc    Create Ticket Note
// @route   POST /api/tickets/:ticketId/notes
// @access  Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not Found');
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (req.user.id !== ticket.user.toString()) {
    res.status(401);
    throw new Error('User not Authorised');
  }

  const note = await Note.create({
    ticket: req.params.ticketId,
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
  });

  res.status(200).json(note);
});

module.exports = {
  getNotes,
  addNote,
};
