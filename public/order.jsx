import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Order extends Component {
  render() {
    return <div><Link to='/main'>This is order 显示我的单的信息</Link></div>
  }
}
// return (
//   <div className="container-fluid">
//     <div className="main-head">
//       <Link to="main" className="logo">Delicious School</Link>
//       <Link to="#" className="main-top">登录</Link>
//       <Link to="register" className="main-top">注册</Link>
//       <Link to="order" className="main-top">我的订单</Link>
//     </div>
//
//     <div className="row body-margin">
//       <div className="col-md-4 store">
//         <h1 className="store-width">糕点屋</h1>
//       </div>
//       <div className="col-md-8">
//         <span className="meal-font">芒果空气感蛋糕</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <span className="price-color">¥249</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         地址：东升苑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商家电话：188-2929-1234
//       </div>
//     </div>
//
//     <div className="row body-margin">
//       <div className="col-md-4 store">
//         <h1 className="store-width">糕点屋</h1>
//       </div>
//       <div className="col-md-8">
//         <span className="meal-font">芒果空气感蛋糕</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <span className="price-color">¥249</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         地址：东升苑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商家电话：188-2929-1234
//       </div>
//     </div>
//
//     <div className="row body-margin">
//       <div className="col-md-4 store">
//         <h1 className="store-width">糕点屋</h1>
//       </div>
//       <div className="col-md-8">
//         <span className="meal-font">芒果空气感蛋糕</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <span className="price-color">¥249</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         地址：东升苑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商家电话：188-2929-1234
//       </div>
//     </div>
//
//     <div>
//       <button type="button" className="btn btn-primary btn-meal-info">提交订单</button>
//     </div>
//   </div>
//
// );
