function checkUsername() {
  let username = document.getElementById("username").value;
  let patternUsername = /^\d{8}$/;
  let checkUsername = patternUsername.test(username);
  if (!checkUsername) {
    return false;
  }
  return true;
}

function checkPassword() {
  let password = document.getElementById("password").value;
  if (password.length <= 10 && password.length >= 6) {
    return true;
  }
  return false;
}

function checkConfirmPassword() {
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("exampleInputPassword1").value;
  if (password !== passwordConfirm) {
    return false;
  }
  return true;
}

module.exports = {
    checkUsername: checkUsername,
  checkPassword: checkPassword,
  checkConfirmPassword: checkConfirmPassword
};
