function checkUsername() {
    let username = document.getElementById("username").value;
    let patternUsername = /^\d{8}$/;
    let checkUsername = patternUsername.test(username);
    if (!checkUsername) {
        $("#username-error").html("用户名格式错误！");
        // document.getElementById("username-error").innerHTML = "<h1>用户名格式错误！</h1>";
        $("#username").focus();
        return false;
    }
    $("#username-error").html("");
    return true;
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let patternPassword = /^\d{6,10}$/;
    let checkPassword = patternPassword.test(password);
    if (!checkPassword) {
        $("#password-error").html("密码格式错误！");
        $('#password').focus();
        return false;
    }
    $("#password-error").html("");
    return true;
}

function checkConfirmPassword() {
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("exampleInputPassword1").value;
    if (password !== passwordConfirm) {
        $("#confirmPassword").html("两次密码输入不一致！");
        $("#confirmPassword").focus();
        return false;
    }
    $("#confirmPassword").html("");
    return true;
}

function checkFormatInput() {
    if (checkUsername() && checkConfirmPassword()) {
        $("#success").html("注册成功！");
        return true;
    }
    $("#success").html("注册不成功！");
    return false;
}

module.exports = {
    checkUsername: checkUsername,
    checkPassword: checkPassword,
    checkConfirmPassword: checkConfirmPassword,
    checkFormatInput: checkFormatInput
};
