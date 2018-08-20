import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../page/home';
import About from '../page/about';
import User from '../page/user'

const historyConfig = createBrowserHistory({
  basename: '/' + __AREA_ENV__
});

export default (
  <Router history={historyConfig}>
    <div id='root-wrap'>
     <div>
        <ul className="nav">
　　　　　　<li><Link to="/">App</Link></li>
　　　　　　<li><Link to="/About">About</Link></li>
　　　　　　<li><Link to="/Inbox">Inbox</Link></li>
　　 　　　　</ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Inbox" component={User} />
    </div>
    </div>
  </Router>
);

