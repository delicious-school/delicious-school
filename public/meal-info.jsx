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
      username: '',
      totalPrice: 0,
      storeInfo: {},
      peopleStatus:0
    };
  }

  componentWillMount() {
    this.getCookie();
    this.getDishInformation();
    this.getStore();
  }

  componentDidMount(){
    this.getPeopleState();
    // console.log('aaaaaaaaaaaaaaaaaa     '+this.state.mealInfo.dishname);
  }


  render() {
    const {dishname, dishprice, dishpicture}= this.state.mealInfo;
    const {storename, storephone, storelocation, status}=this.state.storeInfo;
    this.state.totalPrice = dishprice * this.state.count;
    return (
      <div className="container-fluid">
        <div className="main-head">
          <Link to="main" className="logo">Delicious School</Link>
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
              <div>总计：{this.state.totalPrice}</div>
              <div>您前面还有&nbsp;{status}&nbsp;道菜</div>
              <div>您前面还有&nbsp;{this.state.peopleStatus}&nbsp;个人</div>
              <button onClick={this.saveStoreState.bind(this)} type="button" className="btn btn-primary btn-meal-info">
                预订
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
        count: this.state.count - 1,
        totalPrice: this.state.count * this.state.totalPrice
      });
    }
  }

  _addCount() {
    this.setState({
      count: this.state.count + 1,
      totalPrice: this.state.count * this.state.totalPrice
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

  getDishInformation() {
    const url = location.href;
    let id = url.split('=')[1].split('&')[0];

    request.get('/api/meal-info/', {id})
      .end((err, res)=> {
        const mealInfo = res.body;
        if (err) return alert(err);
        this.setState({
          mealInfo: mealInfo
        });
      });
  }

  getStore() {
    request.post('/api/stores')
      .send({storename: this.state.mealInfo.dishstore})
      .end((err, res)=> {
        if (err) return alert(err);
        const storeInfo = res.body;
        this.setState({
          storeInfo: storeInfo
        });
      });
  }

  saveStoreState() {
    request.post('/api/stores/update-status')
      .send({
        storeInfo: this.state.storeInfo,
      })
      .end((err, res)=> {
        if (err) return alert(err);
        if(res) {
          alert('预定成功！');
        }
      });
  }

  getPeopleState(){
    request.post('/api/stores/people-status')
      .send({
        username: this.state.username,
        mealInfo:this.state.mealInfo,
        storeInfo:this.state.storeInfo,
        count:this.state.count,
        totalPrice:this.state.totalPrice
      })
      .end((err, res)=> {
        if (err) return alert(err);
        if(!res.body){
          res.body=0;
        }
        this.setState({
          peopleStatus:res.body
        });
        alert(res.body);
      });
  }
}
