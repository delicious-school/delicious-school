import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


export default class MealInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealInfo:'mei you cai!'
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
          <li>{dishname}-----dishname</li>
          <li>{dishprice}-----dishprice</li>
          <li>{dishstore}-----dishstore</li>
        </ul>
        <button onClick={this.myOrder(dishname,dishprice,dishstore)}>预定</button>
        <button><Link to="/main">返回</Link></button>
      </div>
    )
  }


  dishInformation() {
    const self = this;
    // const id = self.props.location.id;
    const name = '虾仔排骨面';
    $.post('/mealInfo',{dishname:name}, function (mealInfo) {
    // $.post('/mealInfo',{dishId:id}, function (mealInfo) {
    //   alert('postMealinfo--------------------postMealInfo'+mealInfo);
      self.setState({
        mealInfo: mealInfo
      });
    });
  }
  myOrder(dishname,dishprice,dishstore) {
    return ()=> {
      alert('yuding     =====================');

      $.post('/saveOrder', {dishname: dishname, dishprice: dishprice, dishstore: dishstore}, function (result) {
        if (result) {
          alert('预定成功！')
        } else {
          alert('预定失败,服务器忙,请稍后重试。')
        }
      })
    }
  }
}

