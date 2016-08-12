import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
    render() {
        return(
            <div>
                <Link to='/login'>登录</Link>
                <Link to='/register'>注册</Link>
                <Link to='/mealInfo'>炒细面</Link>
                <Link to='/order'>我的订单</Link>
            </div>

            );
    }
}
