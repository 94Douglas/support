const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Note = require("../models/noteModel");
const Ticket = require("../models/ticketModel");

// @desc   Get notes for a ticket
// @route  GET /api/tickets/:ticketId/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.ticketId);

  if (user.isAdmin) {
    res.status(200).json(notes);
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const notes = await Note.find({ ticket: req.params.ticketId });

  res.status(200).json(notes);
});

// @desc   Create ticket note
// @route  POST /api/tickets/:ticketId/notes
// @access Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const ticket = await Ticket.findById(req.params.ticketId);
  if (user.isAdmin === true) {
    res.status(200).json(Note);

    const note = await Note.create({
      text: req.body.text,
      isStaff: true,
      ticket: req.params.ticketId,
      user: req.user.id,
    });
    res.status(200).json(note);
  }
  if (ticket.user.toString() !== req.user.id || user.isAdmin === true) {
    if (ticket.user.isAdmin) {
      res.status(200).json(Note);
    } else {
      res.status(401);
      throw new Error("User not authorized");
    }
  } else {
    const note = await Note.create({
      text: req.body.text,
      isStaff: false,
      ticket: req.params.ticketId,
      user: req.user.id,
    });
    res.status(200).json(note);
  }
});

module.exports = {
  getNotes,
  addNote,
};
