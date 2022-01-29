const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please sdd a Name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an Email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add Password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
