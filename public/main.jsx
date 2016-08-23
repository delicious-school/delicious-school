import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import request from 'superagent';
import {hashHistory} from 'react-router';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      username:''
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
      <Link to="#" className="list-group-item store-list">{item}</Link>
    );

    const dishesRows = this.state.dishes.map(dish=>
      <div className="float-left-picture">
        <img onClick={this.dishView(dish._id)} className="img-responsive center-block picture-margin"
             src={dish.dishpicture}/>
        <h4 onClick={this.dishView(dish._id)}>{dish.dishname}<span className="dishprice">¥{dish.dishprice}</span>
        </h4>
      </div>
    );

    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
          <Link to="order" className="main-top">我的订单</Link>
          <span className="main-top">欢迎{this.state.username}</span>
        </div>

        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li target="#myCarousel" data-slide-to="0" className="active"/>
            <li target="#myCarousel" data-slide-to="1"/>
            <li target="#myCarousel" data-slide-to="2"/>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img src="./img/11.jpg" className="img-responsive img-set" alt=" "/>
            </div>
            <div className="item">
              <img src="./img/12.jpg" className="img-responsive img-set" alt=" "/>
            </div>
            <div className="item">
              <img src="./img/13.jpg" className="img-responsive img-set" alt=" "/>
            </div>
          </div>

          <Link to="#myCarousel" className="carousel-control left" data-slide="prev">&lsaquo;</Link>
          <Link to="#myCarousel" className="carousel-control right" data-slide="next">&rsaquo;</Link>
        </div>

        <div className="row">
          <div className="col-md-3">
            <h2 className="list-group-item store-list list-head">商家列表</h2>
            {storesRows}
          </div>
          <div className="col-md-9">
            {dishesRows}
          </div>
        </div>
      </div>
    );
  }

  initData() {
    const self = this;
    request.post('/api/mainpage')
      .end((err,res) =>{
        const {username,dishes} = res.body;
        if (err) return alert(err);
        self.setState({
          dishes:dishes,
          username:username
        });
      });
  }

  dishView(id) {
    return ()=> {
      self.location = "/#/meal-info/?id=" + id;
    }
  }
}



