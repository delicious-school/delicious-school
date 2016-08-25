import React, {Component} from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import request from 'superagent';
import {checkUsernameAndPassword} from './login-validate';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitButtonEnabled: false
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="#" className="main-top">登录</Link>
          <Link to="register" className="main-top">注册</Link>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 login-page">
            <img className="img-responsive center-block picture-head" src="./img/name1.png"/>
            <form onSubmit={this._onSubmit.bind(this)}>
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
              <button id="btn-check" type="submit" disabled={this.state.submitButtonEnabled ? '' : 'disabled'}
                      className="btn btn-primary btn-block btn-register">登录
              </button>
            </form>
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
    const canSubmit = checkUsernameAndPassword(this.state.username)
      && checkUsernameAndPassword(this.state.password);
    this.setState({
      submitButtonEnabled: canSubmit
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    request.post('/api/sessions')
      .send({
        username: this.state.username,
        password: this.state.password
      })
      .end((err, res) => {
        if (err) {
          if (res.statusCode === 400) {
            alert("用户名或密码不能为空！");
            return
          } else if (res.statusCode === 401) {
            alert("用户名或密码错误！");
            return;
          } else {
            return alert(err);
          }
        }
        if (res.statusCode === 201) {
          alert("登录成功！");
          return hashHistory.push('/main');
        }
      });
  }
}
