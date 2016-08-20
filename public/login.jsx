import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {checkPassword, checkUsername} from './login-validate';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitButtonEnabled: false
    }
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
            <img className="img-responsive center-block picture-head" src="./img/name1.png"/>
            <form>
              <div className="form-group login-user">
                <input type="text" className="form-control" id="username"
                       placeholder="请输入8位学号"
                       onChange={this._onUsernameChanged.bind(this)}/>
              </div>

              <div className="form-group login-password">
                <input type="password" className="form-control" id="password"
                       placeholder="请输入密码(6-10位)"
                       onChange={this._onPasswordChange.bind(this)}/>
              </div>
            </form>
            <button id="btn-check" type="submit" disabled={this.state.submitButtonEnabled ? '' : 'disabled'}
                    className="btn btn-primary btn-block btn-register">登录
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }

  _onUsernameChanged(event) {
    const username = event.target.value;
    this.setState({
      username: username,
    }, () => this._determineIfEnableSubmitButton());
  }

  _onPasswordChange(event) {
    const password = event.target.value;
    this.setState({
      password: password,
    }, () => this._determineIfEnableSubmitButton());
  }

  _determineIfEnableSubmitButton() {
    const canSubmit = checkUsername(this.state.username)
      && checkPassword(this.state.password);
    this.setState({
      submitButtonEnabled: canSubmit
    });
  }


}






