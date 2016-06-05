import React, { Component } from 'react';
import Actions from '../actions';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';

const Login = (props) => {
  function onClick () {
    Actions.login(browserHistory);
  }

  function onClickEmail () {
    Actions.loginEmail(browserHistory, 'admin@admin.com', 'S3cur3D#');
  }

  let cardStyle = {
    'maxWidth': '800px',
    'margin': '20px auto',
    'padding': '50px',
    textAlign: 'center'
  };

  return (
    <div>
      <Card style={ cardStyle }>
        <CardText>
          Ingresa usuario y contraseña
        </CardText>
        <TextField
          hintText="Email" /><br />
        <TextField
          hintText="Password"
          type="password" /><br />
        <RaisedButton label='Login'
          onClick={ onClickEmail }
          primary={true} />
      </Card>
      <Card style={ cardStyle }>
        <CardText>
          O inicia sesión con tu cuenta de Google.
        </CardText>
        <RaisedButton primary={ true }
                      onClick={ onClick }
                      label="Log in with Google" primary={ true } />
      </Card>
    </div>
  );
}

export default Login;
