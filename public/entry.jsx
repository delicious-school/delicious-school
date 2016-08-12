import a from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, hashHistory} from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/index" component={a.Hello}/>
        <Route path="/main" component={a.Main}/>
        <Route path="/business" component={a.BusinessList}/>
    </Router>,
    document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
