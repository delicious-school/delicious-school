import $ from 'jquery';
import React, {Component} from 'react';
import {Link} from 'react-router';
import request from 'superagent';
import {hashHistory} from 'react-router';


export default class MealInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mealInfo: {},
      count: 1,
      userName: '',
      storeInfo: {}
    };
    this.dishInformation();
  }

  render() {
    const {dishname, dishprice, dishpicture}= this.state.mealInfo;
    const {storename, storephone, storelocation}=this.state.storeInfo;

    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="order" className="main-top">我的订单</Link>
          <span className="main-top">欢迎{this.state.username}</span>
        </div>

        <div>
          <div className="row body-margin">
            <div className="col-md-4">
              <img className="img-responsive center-block" src={dishpicture}/>
            </div>
            <div className="col-md-8">
              <h1>{dishname}</h1>
              <h1 className="price-color">¥{dishprice}</h1>
              <h4>店名：{storename}</h4>
              <h4>联系店家：{storephone}</h4>
              <h4>地址：{storelocation}</h4>
              <h4>
                <button onClick={this._subCount.bind(this)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this._addCount.bind(this)}>+</button>
              </h4>
              <button
                onClick={this.myOrder(dishname, dishprice, storename, storephone, storelocation, this.state.count)}
                type="button"
                className="btn btn-primary btn-meal-info">预订
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _subCount() {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  _addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  dishInformation() {
    // const self = this;
    const url = location.href;
    let id = url.split('=')[1].split('&')[0];

    request.post('/api/mealInfo')
      .send({id: id})
      .end((err, res)=> {
        const {userName, mealInfo, storeInfo} = res.body;
        if (err) return alert(err);
        this.setState({
          mealInfo: mealInfo,
          userName: userName,
          storeInfo: storeInfo
        });
      });
  }

  myOrder(dishname, dishprice, storename, storephone, storelocation,count) {
    return ()=> {
      const dishOrder = {
        username: '',
        dishname: dishname,
        dishprice: dishprice,
        dishstore: storename,
        dishescount: count,
        storephone:storephone,
        storelocation:storelocation
      };
      $.post('/saveOrder', dishOrder, function (result) {
        if (result) {
          alert('预定成功！')
          hashHistory.push('/main');
        } else {
          alert('预定失败,服务器忙,请稍后重试。')
        }
      })
    }
  }
}

