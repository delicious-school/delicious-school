function checkUsername() {
  let username = document.getElementById("username").value;
  if (username !== '') {
    return true;
  }
}

function checkPassword() {
  let password = document.getElementById("password").value;
  if (password !== '') {
    return true;
  }
}

module.exports = {
  checkUsername: checkUsername,
  checkPassword: checkPassword,
};
