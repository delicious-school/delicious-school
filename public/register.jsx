import React, {Component} from 'react';
import {Link} from 'react-router';
import {checkUsername, checkPassword, checkConfirmPassword, checkFormatInput} from '../api/users';

export default class Register extends Component {
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
            {/*<h1 className="register-head">Delicious School</h1>*/}
            <img className="img-responsive center-block picture-head" src="./img/name1.png"/>
            <form>
              <div className="form-group register-user">
                <input type="text" className="form-control" id="username" onBlur={checkUsername} placeholder="请输入8位学号"/>
                <div id="username-error" className=" tips"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="password" onBlur={checkPassword}
                       placeholder="请输入密码(6-16位)"/>
                <div id="password-error" className=" tips"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword1" onBlur={checkConfirmPassword}
                       placeholder="请确认密码"/>
                <div id="confirmPassword" className=" tips"/>
              </div>
            </form>
            <button type="button" className="btn btn-primary btn-block btn-register" onClick={checkFormatInput}>注册
            </button>
            <div id="success" className="alert alert-warning"/>
          </div>
          <div className="col-md-4">
            {/*<div id="username-error"/>*/}
            {/*<div id="password-error"/>*/}
            {/*<div id="confirmPassword"/>*/}
            {/*<div id="success"/>*/}
          </div>
        </div>
      </div>
    );
  }
}


