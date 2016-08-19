"use strict";
function validateLogin(user) {
  if (user.username === undefined || user.password === undefined) {
    return false;
  }
  if (user.username === '' || user.password === '') {
    return false;
  }
  return true;
}
module.exports = validateLogin;
