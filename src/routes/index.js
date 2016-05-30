import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import Chat from '../components/Chat';
import Login from '../components/Login';
// import ChatStore from '../stores/ChatStore';
import firebase from '../services/firebaseService';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

let auth = firebase.auth();
console.log('init');
auth.onAuthStateChanged(authChanged);

let requireAuth = (nextState, replace) => {
  if (!auth.currentUser) {
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

function authChanged(user) {
  console.log('authChanged');
  if (user) {
    console.log(auth.currentUser);
  } else {
    console.log('no user');
  }

  render(<Router routes={ routes } history={ browserHistory } />,
    document.getElementById('root'));
}
