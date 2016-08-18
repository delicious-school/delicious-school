function validate(user) {
  if (user.username.length === 8 && (user.password.length <= 10 && user.password.length >= 6)) {
    if (/^[0-9]*$/.test(user.username)) {
      return true;
    }
  }
  return false;
}
module.exports = validate;
