import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Order extends Component {
    render() {
        return (
            <div>
                <div id="busnissName">细面之家</div>
                <div id="foodName">炒细面</div>
                <Link to='/main'>返回主页</Link>
            </div>
        );
    }
}
