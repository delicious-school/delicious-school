import React, {Component} from 'react';
import {Link} from 'react-router';

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
            <h1 className="register-head">Delicious School</h1>
            <form>
              <div className="form-group register-user">
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="请输入8位学号"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="请输入密码(6-16位)"/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请确认密码"/>
              </div>
            </form>
            <button type="button" className="btn btn-primary btn-block btn-register">注册</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


