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

}

module.exports = {
  checkPassword,
  checkUsername
}
