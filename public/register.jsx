import React, {Component} from 'react';
import {Link} from 'react-router';
import request from 'superagent';


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
            <h1 className="register-head">Delicious School</h1>
            <form onSubmit={this._onSubmit.bind(this)}>
              <div className="form-group register-user">
                <input type="text" className="form-control" id="username" placeholder="请输入8位学号"
                       value={this.state.username} onChange={this._onUsernameChange.bind(this)}/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="password" placeholder="请输入密码(6-16位)"
                       value={this.state.password} onChange={this._onPasswordChange.bind(this)}/>
              </div>

              <div className="form-group register-password">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="请确认密码"/>
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
        //这里是前端处理  res：stateCode
        alert(res);
      })
  }

}
