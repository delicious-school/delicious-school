"use strict";
let _ = require("lodash");
function validateLogin(user) {
  return !(user.username === undefined || user.password === undefined || _.isEmpty(user.username) || _.isEmpty(user.password))
}
module.exports = validateLogin;
