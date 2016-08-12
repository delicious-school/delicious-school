import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MealInfo extends Component {
    render() {
        return (
            <div>
                <div>细面之家</div>
                <div>炒细面</div>
                <div>￥6</div>

                <input value="预订" type="submit"></input>
                <Link to='/main'>返回主页</Link>
            </div>
        );
    }
}

