import React, {Component} from 'react';
// import {Link} from 'react-router';
// import React from 'react';
import $ from 'jquery';
import _ from 'lodash';



export default class Main extends Component {


  constructor(props) {

    super(props);
    this.state = {
      dishes: []
    };
    this.initData();
    this.dishView = this.dishView.bind(this);
  }

  render() {
    const dishesRows = this.state.dishes.map(dish =>
      <tr key={dish._id}>
        <td>{dish.dishname}</td>
        <td>{dish.dishprice}</td>
        <td>
          <button onClick={this.dishView(dish._id)}>查看菜品详情</button>
        </td>
      </tr>
    );
    return (
      <div>
        <div>
          <table>
            <thead>
            <tr>
              <th>菜名</th>
              <th>价格</th>
            </tr>
            </thead>
            <tbody>
            {dishesRows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  initData() {
    const self = this;
    $.post('/init', function (dishes) {
      self.setState({
        dishes: dishes
      });
    });
  }

  dishView(id) {
    return ()=> {
      self.location = "/#/meal-info/?id=" + id;
    }
  }

  // dishView(id){
  //   return () => {
  //     const self = this;
  //     $.ajax({
  //       url: '/students/' + id,
  //       type: 'POST',
  //       success: function (result) {
  //         const remainStudents = _.filter(self.state.students, s => s._id !== id);
  //         self.setState({
  //           students: remainStudents
  //         });
  //       }
  //     });
  //   }
  // }
}

