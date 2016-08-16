/**
 * Created by SONY on 2016/8/11.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

// the collection's name is `users`
var User = mongoose.model('User', userSchema);

module.exports = User;
