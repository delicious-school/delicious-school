import React, {Component} from 'react';
import {Link} from 'react-router';
import request from 'superagent';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      username: '',
    };
  }

  componentWillMount() {
    this.initData();
    this.getCookie();
  }

  render() {
    const stores = this.state.dishes.reduce((result, {dishstore})=> {
      let found = result.find((item)=>item === dishstore);
      if (!found) {
        result.push(dishstore);
      }
      return result;
    }, []);
    const storeRow1 = <Link to="/main/one" className="list-group-item store-list">{stores[0]}</Link>
    const storeRow2 = <Link to="/main/two" className="list-group-item store-list">{stores[1]}</Link>
    const storeRow3 = <Link to="/main/three" className="list-group-item store-list">{stores[2]}</Link>

    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
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
            <ul className="list-group-item store-list list-head">商家列表</ul>
            {storeRow1}
            {storeRow2}
            {storeRow3}
          </div>
          {this.props.children}
        </div>
      </div>

    );
  }
  initData() {
    const self = this;
    request.post('/api/mainpage')
      .end((err, res) => {
        const {dishes} = res.body;
        if (err) return alert(err);
        self.setState({
          dishes: dishes
        });

      });
  }
  getCookie() {
    const self = this;
    request.post('/api/cookie')
      .end((err, res) => {
        const {username} = res.body;
        if (err) return alert(err);
        self.setState({
          username: username
        });
      });
  }
}
