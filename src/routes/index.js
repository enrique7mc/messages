import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import Chat from '../components/Chat';
import Login from '../components/Login';
import ChatStore from '../stores/ChatStore';
import firebase from '../services/firebaseService';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let requireAuth = (nextState, replace) => {
  let state = ChatStore.getState();
  if (!state.user) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

let routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Chat} onEnter={ requireAuth } />
    <Route path="chat" component={Chat} onEnter={ requireAuth } />
    <Route path="chat/:channel" component={Chat} onEnter={ requireAuth } />
    <Route path="login" component={Login} />
  </Route>
);

render(<Router routes={ routes } history={ browserHistory } />,
  document.getElementById('root'));
