import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  commit() {
    let username = $("#username").val();
    let password = $("#password").val();
    $.ajax({
      url: '/login',
      type: 'POST',
      async: true,
      data: {username: username, password: password},
      success: function (result) {
        if (result) {
          self.location = "/#/main";
        } else {
          alert("用户名或密码错误！");
          location.href = "/#/login";
        }
      }
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="#" className="main-top">登录</Link>
          <Link to="register" className="main-top">注册</Link>
          <Link to="order" className="main-top">我的订单</Link>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 login-page">
            <h1 className="login-head">Delicious School</h1>
            <form>
              <div className="form-group login-user">
                <input type="text" className="form-control" id="username" placeholder="请输入8位学号"/>
              </div>

              <div className="form-group login-password">
                <input type="password" className="form-control" id="password" placeholder="请输入密码(6-16位)"/>
              </div>
            </form>
            <button type="button" onClick={this.commit} className="btn btn-primary btn-block btn-login">登录</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}






