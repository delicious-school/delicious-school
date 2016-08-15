import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MealInfo extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="#" className="main-top">登录</Link>
          <Link to="register" className="main-top">注册</Link>
          <Link to="order" className="main-top">我的订单</Link>
        </div>

        <div>
          <div className="row body-margin">
            <div className="col-md-4">
              <img className="img-responsive center-block" src="./img/4.jpg"/>
            </div>
            <div className="col-md-8">
              <h1>芒果空气感蛋糕</h1>
              三层香甜可口的芒果香缇奶油，三层松软可口的柠檬蛋糕胚，层层夹着自制芒果酱汁和Q滑芒果果肉，蛋糕面上用薄荷叶、蓝莓粒、白巧克力、开心果点缀，一勺入口如同春风在亲吻你的唇，似是沐浴在春日暖阳里，轻盈、舒适、无负担。
              <h2 className="price-color">¥249</h2>
              店名：糕点屋<br/>
              地址：东升苑<br/>
              商家电话：188-2929-1234
              <button type="button" className="btn btn-primary btn-meal-info">预订</button>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

