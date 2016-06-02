import React, { Component } from 'react';
import Actions from '../actions';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const Login = (props) => {
  function onClick () {
    Actions.login(browserHistory);
  }

  let cardStyle = {
    'maxWidth': '800px',
    'margin': '30px auto',
    'padding': '50px'
  };

  return (
    <Card style={ cardStyle }>
      <CardText style={{ 'textAlign': 'center' }}>
        Inicia sesión con tu cuenta de Google.
      </CardText>
      <RaisedButton style={{ display: 'block', }}
                    onClick={ onClick }
                    label="Log in with Google" primary={ true } />
    </Card>
  );
}

export default Login;
