const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
});

// the collection's name is `users`
const User = mongoose.model('User', userSchema);

module.exports = User;
