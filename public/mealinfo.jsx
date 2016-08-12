import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MealInfo extends Component {
    render() {
        return (
            <div>
                <div id="busnissName">细面之家</div>
                <div id="foodName">炒细面</div>
                <div id="price">￥6</div>

                <input id="order" value="预订" type="submit"></input>
                <Link to='/main'>返回主页</Link>
            </div>
        );
    }
}

