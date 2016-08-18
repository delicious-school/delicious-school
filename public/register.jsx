import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import request from 'superagent';
import {checkUsername, checkPassword, checkConfirmPassword} from '../js/validate';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="login" className="main-top">登录</Link>
          <Link to="#" className="main-top">注册</Link>
          <Link to="order" className="main-top">我的订单</Link>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 register-page">
            <img className="img-responsive center-block picture-head" src="./img/name1.png"/>
            <form onSubmit={this._onSubmit.bind(this)}>
              <div className="form-group register-user">
                <input type="text" className="form-control" id="username" onBlur={checkUsername} placeholder="请输入8位学号"
                       value={this.state.username} onChange={this._onUsernameChange.bind(this)}/>
                <div id="username-error" className=" tips"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="password" onBlur={checkPassword}
                       placeholder="请输入密码(6-16位)" value={this.state.password}
                       onChange={this._onPasswordChange.bind(this)}/>
                <div id="password-error" className=" tips"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword1" onBlur={checkConfirmPassword}
                       placeholder="请确认密码"/>
                <div id="confirmPassword" className=" tips"/>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-register">注册</button>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }

  _onUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  _onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  _onSubmit(event) {
    event.preventDefault();
    request.post('/api/users')
      .send({
        username: this.state.username,
        password: this.state.password
      })
      .end((err, res) => {

        if (err) return console.error(err);
        if (res === 201) {
          alert("注册成功！");
          <Link to="main"/>
        }
        if (res === 400) {
          alert("用户名或密码不正确！");
        }
        if (res === 409) {
          alert("用户名已存在！");
        }

      })
  }

}
