function checkUsername(username) {
  const patternUsername = /^\d{8}$/;
  return patternUsername.test(username);
}

function checkPassword(password) {
  return password.length <= 10 && password.length >= 6;
}

function checkConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

module.exports = {
  checkUsername: checkUsername,
  checkPassword: checkPassword,
  checkConfirmPassword: checkConfirmPassword
};
