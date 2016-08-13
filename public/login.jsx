import React, {Component} from 'react';
import $ from 'jquery';
// import History from "react-router";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  commit(){
    let username = $("#username").val();
    let password = $("#password").val();
    $.ajax({
      url:'/login',
      type:'POST',
      async:true,
      data:{username:username,password:password},
      success:function(result){
        if(result){
          alert("eeeeeeeee");
          // this.props.history.pushState(null,'/main');
         location.href('/#/main');
          alert("fffffffffffff");
        }else{
          alert("用户名或密码错误！");
          self.location.href("./login.jsx");
        }
        alert("----------success-----------"+result.username);
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
      </div>
    )
  }
}


