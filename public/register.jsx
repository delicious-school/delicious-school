import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Register extends Component {
    render() {
        return (
            <div>
                <form >
                    用户名：
                    <input type="text"/><br />
                    密 码：
                    <input type="password"/><br />
                    <Link to='/login'><input type="submit" value="注册"/></Link>
                </form>
            </div>
        )
    }
}


