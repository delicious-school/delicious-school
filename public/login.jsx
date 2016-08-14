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


  //const userInfo=
  render() {
    return (
      <div>
        用户名：
        <input id="username" name="username" type="text"/><br />
        密 码：
        <input id="password" name="password" type="password"/><br />
        <input type="submit" value="登录" onClick={this.commit}/>
        <Link to="/register">
          <input type="button" value="注册"/>
        </Link>
      </div>
    )
  }
}


