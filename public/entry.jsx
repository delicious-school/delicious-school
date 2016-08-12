// import Hello from './hello.jsx';
import App from './app.jsx';
import Main from './main.jsx';
import MealInfo from './mealinfo.jsx';
import Order from './order.jsx';
import Login from './login.jsx';
import Register from './register.jsx';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
require('jquery');
require("bootstrap-webpack");
require('./style.css');

const router = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='main' component={Main} />
    <Route path='login' component={Login} />
    <Route path='register' component={Register} />
    <Route path='mealInfo' component={MealInfo} />
    <Route path='order' component={Order}/>
  </Route>
</Router>;




ReactDOM.render(
    router,
    document.getElementById('content')
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
