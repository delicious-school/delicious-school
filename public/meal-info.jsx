import $ from 'jquery';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import request from 'superagent';


export default class MealInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mealInfo: '',
      count:1
    };
    this.dishInformation();
  }

  render() {
    const dishname = this.state.mealInfo.dishname,
      dishprice = this.state.mealInfo.dishprice,
      dishpicture = this.state.mealInfo.dishpicture,
      dishstore = this.state.mealInfo.dishstore;

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
              <img className="img-responsive center-block" src={dishpicture}/>
            </div>
            <div className="col-md-8">
              <h1>{dishname}</h1>
              <h2 className="price-color">¥{dishprice}</h2>
              店名：{dishstore}<br/>
              联系店家：
              <h4>
                <button onChange={this._subCount.bind(this)}>-</button>
                <span className="count">{this.state.count}</span>
                <button onClick={this._addCount.bind(this)}>+</button>
              </h4>
              <button onClick={this.myOrder(dishname, dishprice, dishstore, this.state.count)} type="button"
                      className="btn btn-primary btn-meal-info">预订
              </button>
              <button onClick={this.myOrder(dishname, dishprice, dishstore, this.state.count)}>预定</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _subCount(){
    console.log('[[[[[[[[[[[[[[[[[');
    const oldCount =this.state.count;
    console.log(oldCount+']]]]]]]]]]]]]]]]]]]]]]]]]]]]');
    if(oldCount>1){
      console.log('[[[[[[[[[[[[[[[[[');
      this.setState=({
        count: oldCount-1
      });
    }
  }

  _addCount(){
    const oldCount =this.state.count;
    this.setState = ({
      count:oldCount+1
    })
  }


  dishInformation() {
    const self = this;
    const url = location.href;
    let id = url.split('=')[1].split('&')[0];
    $.post('/mealInfo', {id: id}, function (mealInfo) {
      self.setState({
        mealInfo: mealInfo,
      });
    });
  }

  addCount(num) {
    return ()=> {
      count += num;
      if (count <= 0) {
        count = 1;
      }
      $('.count').html(count);
    }
  }

  myOrder(dishname, dishprice, dishstore, count) {
    return ()=> {
      const dishOrder = {
        username: '',
        dishname: dishname,
        dishprice: dishprice,
        dishstore: dishstore,
        dishescount: count,
        orderstates: '1'
      };
      $.post('/saveOrder', dishOrder, function (result) {
        if (result) {
          alert('预定成功！')
        } else {
          alert('预定失败,服务器忙,请稍后重试。')
        }
      })
    }
  }
}

