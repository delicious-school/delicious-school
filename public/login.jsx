import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {
  render() {
    return(
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
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="请输入8位学号"/>
              </div>

              <div className="form-group login-password">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请输入密码(6-16位)"/>
              </div>
            </form>
            <button type="button" className="btn btn-primary btn-block btn-login">登录</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}


