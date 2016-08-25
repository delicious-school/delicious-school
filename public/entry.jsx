import Login from './login.jsx';
import Register from './register.jsx';
import App from './app.jsx';
import Main from './main.jsx';
import MealInfo from './meal-info.jsx';

import Initdash from  './initdash.jsx';
import Dish from  './dish.jsx';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

require('jquery');
require("bootstrap-webpack");
require('./style/main.css');
require('./style/login.css');
require('./style/register.css');
require('./style/meal-info.css');
require('./style/order.css');




const router = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Login}/>
    <Route path='login' component={Login}/>
    <Route path='register' component={Register}/>
    <Route path='main' component={Main}>
      <IndexRoute component={Initdash}/>
      <Route path='initdash' component={Initdash}/>
      <Route path="dish/:dishname" component={Dish} />
      </Route>
    <Route path='meal-info(/:id)' component={MealInfo}/>
  </Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById('content')
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
