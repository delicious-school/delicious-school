import React, {Component} from 'react';
import $ from 'jquery';

export default class Register extends Component {
  constructor(props) {
    super(props);
  }
  commit(){
    let username = $("#username").val();
    let password = $("#password").val();
    $.ajax({
      url:'/register',
      type:'POST',
      async:true,
      data:{username:username,password:password},
      success:function(result){
        if(result){
          location.href ="/#/main";
        }else {
          alert("用户名已存在！");
          location.href = "/#/register";
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
        <input type="submit" value="注册" onClick={this.commit}/>
      </div>
    )
  }
}


