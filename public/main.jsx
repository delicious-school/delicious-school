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
    const stores = this.state.dishes.reduce((result, {dishstore})=> {
      let found = result.find((item)=>item === dishstore);
      if (!found) {
        result.push(dishstore);
      }
      return result;
    }, []);

    const storesRows = stores.map(item=>
      <li>{item}</li>
    );

    const dishesRows = this.state.dishes.map(dish=>
      <tr key={dish._id}>
        <td>{dish.dishname}</td>
        <td>{dish.dishprice}</td>
        <td>{dish.dishstore}</td>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>
          <button onClick={this.dishView(dish._id)}>查看</button>
        </td>
      </tr>
    );

    return (
      <div>
        <div>
          <h4>商家</h4>
          <ul>
            {storesRows}
          </ul>
        </div>
        <hr />
        <div>
          <table>
            <thead>
            <tr>
              <th>菜名</th>
              <th>价格</th>
              <th>商家</th>
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

