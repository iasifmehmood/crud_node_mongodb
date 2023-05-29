const moongose = require('mongoose');

const userSchema = new moongose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  contact: {
    required: true,
    type: Number,
  },
});

module.exports = moongose.model('Users', userSchema);
