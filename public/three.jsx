import React, {Component} from 'react';
import {Link} from 'react-router';
import request from 'superagent';

export default class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeOfDishes:[]
    };
  }
  componentWillMount(){
    this.initStoreOfDishes();
    this.dishView = this.dishView.bind(this);
  }
  render() {
    const dishesRows = this.state.storeOfDishes.map(dish=>
      <div className="float-left-picture">
        <img onClick={this.dishView(dish._id)} className="img-responsive center-block picture-margin"
             src={dish.dishpicture}/>
        <h4 onClick={this.dishView(dish._id)}>{dish.dishname}<span className="dishprice">¥{dish.dishprice}</span>
        </h4>
      </div>
    );

    return (
      <div className="col-md-9">
        {dishesRows}
      </div>
    );
  }

  initStoreOfDishes(){
    const  self = this;
    request.get('/api/mainpage/storeOfDishes/3号店')
      .end((err,res) =>{
        const {storeOfDishes} = res.body;
        if (err) return alert(err);
        self.setState({
          storeOfDishes:storeOfDishes
        });

      })
  }
  dishView(id) {
    return ()=> {
      self.location = "/#/meal-info/?id=" + id;
    }
  }
}
