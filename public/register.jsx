import React, {Component} from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import request from 'superagent';
import {checkUsername, checkPassword, checkConfirmPassword} from './register-validate';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      exampleInputPassword1: '',
      usernameError: '',
      passwordError: '',
      confirmPasswordError: '',
      submitButtonEnabled: false
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="login" className="main-top">登录</Link>
          <Link to="#" className="main-top">注册</Link>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 register-page">
            <img className="img-responsive center-block picture-head" src="./img/name1.png"/>
            <form onSubmit={this._onSubmit.bind(this)}>
              <div className="form-group register-user">
                <input type="text" className="form-control" id="username"
                       onBlur={this._checkUsername.bind(this)}
                       placeholder="请输入8位学号"
                       onChange={this._onUsernameChanged.bind(this)}/>
                <div className="tips">{this.state.usernameError}</div>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="password"
                       onBlur={this._checkPassword.bind(this)}
                       placeholder="请输入密码(6-10位)"
                       onChange={this._onPasswordChange.bind(this)}/>
                <div className="tips">{this.state.passwordError}</div>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword1"
                       onBlur={this._checkConfirmPassword.bind(this)}
                       onChange={this._onConfirmPasswordChange.bind(this)}
                       placeholder="请确认密码"/>
                <div className="tips">{this.state.confirmPasswordError}</div>
              </div>
              <button id="btn-check" type="submit" disabled={this.state.submitButtonEnabled ? '' : 'disabled'}
                      className="btn btn-primary btn-block btn-register">注册
              </button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }

  _checkUsername(event) {
    var username = event.target.value;
    if (checkUsername(username)) {
      this.setState({usernameError: ''});
    } else {
      this.setState({usernameError: '用户名格式错误！'});
    }
  }

  _checkPassword(event) {
    const password = event.target.value;
    if (checkPassword(password)) {
      this.setState({passwordError: ''});
    } else {
      this.setState({passwordError: '密码格式错误！'})
    }
  }

  _checkConfirmPassword(event) {
    const confirmPassword = event.target.value;
    if (checkConfirmPassword(this.state.password, confirmPassword)) {
      this.setState({confirmPasswordError: ''});
    } else {
      this.setState({confirmPasswordError: '两次密码输入不一致！'})
    }
  }

  _onUsernameChanged(event) {
    const username = event.target.value;
    this.setState({
      username: username,
      usernameError: ''
    }, () => this._determineIfEnableSubmitButton());
  }

  _onPasswordChange(event) {
    const password = event.target.value;
    this.setState({
      password: password,
      passwordError: ''
    }, () => this._determineIfEnableSubmitButton());
  }

  _onConfirmPasswordChange(event) {
    const confirmPassword = event.target.value;
    this.setState({
      confirmPassword: confirmPassword,
      confirmPasswordError: ''
    }, () => this._determineIfEnableSubmitButton());
  }

  _determineIfEnableSubmitButton() {
    const canSubmit = checkUsername(this.state.username)
      && checkPassword(this.state.password) && checkConfirmPassword(this.state.password,this.state.confirmPassword);
    this.setState({
      submitButtonEnabled: canSubmit
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    request.post('/api/users')
      .send({
        username: this.state.username,
        password: this.state.password
      })
      .end((err, res) => {
        if (err) {
          if (res.statusCode === 400) {
            alert("用户名或密码不正确！");
            return;
          } else if (res.statusCode === 409) {
            alert("用户名已存在！");
            return;
          } else {
            return alert(err);
          }
        }
        if (res.statusCode === 201) {
          alert("注册成功！");
          return hashHistory.push('/main');
        }
      });
  }
}
