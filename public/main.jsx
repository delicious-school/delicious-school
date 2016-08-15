import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="#" className="logo">Delicious School</Link>
          <Link to="login" className="main-top">登录</Link>
          <Link to="register" className="main-top">注册</Link>
          <Link to="order" className="main-top">我的订单</Link>
        </div>

        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li target="#myCarousel" data-slide-to="0" className="active"/>
            <li target="#myCarousel" data-slide-to="1"/>
            <li target="#myCarousel" data-slide-to="2"/>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src="./img/11.jpg" className="img-responsive" alt=" "/>
            </div>
            <div className="item">
              <img src="./img/12.jpg" className="img-responsive" alt=" "/>
            </div>
            <div className="item">
              <img src="./img/13.jpg" className="img-responsive" alt=" "/>
            </div>
          </div>

          <Link to="#myCarousel" className="carousel-control left" data-slide="prev">&lsaquo;</Link>
          <Link to="#myCarousel" className="carousel-control right" data-slide="next">&rsaquo;</Link>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Link to="#" className="list-group-item store-list list-head">商家列表</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
            <Link to="#" className="list-group-item store-list">糕点屋</Link>
          </div>
          <div className="col-md-9">
            <table className="table table-bordered meal-set">
              <tr>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <Link to="meal-info">
                    <h4>芒果空气感蛋糕</h4>
                  </Link>
                </td>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <h4>芒果空气感蛋糕</h4>
                </td>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <h4>芒果空气感蛋糕</h4>
                </td>
              </tr>

              <tr>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <h4>芒果空气感蛋糕</h4>
                </td>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <h4>芒果空气感蛋糕</h4>
                </td>
                <td>
                  <img className="img-responsive center-block picture-margin" src="./img/4.jpg"/>
                  <h4>芒果空气感蛋糕</h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    );
  }
}
