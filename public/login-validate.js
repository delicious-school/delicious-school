function checkUsername() {
  let username = document.getElementById("username").value;
  if (username !== '') {
    return true
  }
}

function checkPassword() {
  let password = document.getElementById("password").value;
  if (password !== '') {
    return true
  }
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
