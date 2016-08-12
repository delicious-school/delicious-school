import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MealInfo extends Component {
    render() {
        return <div><Link to='/order'>显示所点击的菜的信息</Link></div>
    }
}

