/**
 * Created by xjy on 8/11/16.
 */
"use strict";
function check(){
    let schoolName = document.getElementById("school-input").value;
    if(schoolName===""){
        alert("学校名不能为空！");
    }
    let username = document.getElementById("username-input").value;
    let patternUsername = /^\d{8}$/;
    let checkUsername = patternUsername.test(username);
    if (checkUsername === false ) {
        alert("用户名必须为8位数字！");
    }
    let password = document.getElementById("password-input").value;
    let patternPassword = /^[0-9_a-zA-Z]{6,16}$/;
    let checkPassword = patternPassword.test(password);
    if (checkPassword === false ) {
        alert("密码必须为6-16位（数字，字母，下划线）！");
    }
    let passwordConfirm = document.getElementById("password-repeat").value;
    if (password !== passwordConfirm ) {
        alert("两次密码输入不一致！");
    }
    if(schoolName!==""&&checkUsername===true&&checkPassword===true&&password===passwordConfirm){
        alert("注册成功！");
    }
}