import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form >
                    用户名：
                    <input name="name" type="text"/><br />
                    密 码：
                    <input type="password"/><br />
                    <Link to='/main'><input type="submit" value="登录"/></Link>
                </form>
            </div>
        )
    }
}


