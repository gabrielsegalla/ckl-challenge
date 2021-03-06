import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Login from './container/Login'
import MyInterests from './container/MyInterests'
import Home from './container/Home'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/my-interests' component={MyInterests}></Route>
        </Route>
        <Route path='/login' component={Login}></Route>
        
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
