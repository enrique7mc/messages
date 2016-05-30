import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import Chat from '../components/Chat';
import Login from '../components/Login';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Chat}/>
    <Route path="chat" component={Chat}/>
    <Route path="login" component={Login}/>
  </Route>
);

render(<Router routes={ routes } history={ browserHistory } />,
  document.getElementById('root'));
