import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
let count = 1;

export default class MealInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mealInfo: 'mei you cai!',
      // count: 0
      // id:location.query.id
    };
    this.dishInformation();
  }

  render() {
    const dishname = this.state.mealInfo.dishname,
      dishprice = this.state.mealInfo.dishprice,
      dishstore = this.state.mealInfo.dishstore;

    return (
      <div>
        <ul>
          <h4>菜品详情</h4>
          <li>{dishname}</li>
          <li>{dishprice}</li>
          <li>{dishstore}</li>
          <li>
            <button onClick={this.addCount(-1)}>减</button>
            <span className="count">{count}</span>
            <button onClick={this.addCount(1)}>加</button>
          </li>
        </ul>
        <button onClick={this.myOrder(dishname, dishprice, dishstore, this.state.count)}>预定</button>
        <button><Link to="/main">返回</Link></button>
      </div>
    )
  }

  dishInformation() {
    const self = this;
    const url = location.href;
    let id = url.split('=')[1].split('&')[0];
    $.post('/mealInfo', {id: id}, function (mealInfo) {
      self.setState({
        mealInfo: mealInfo,
        // count:1
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
      // this.setState.count=count;
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

