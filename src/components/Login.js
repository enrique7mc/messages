import React, { Component } from 'react';
import Actions from '../actions';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends Component {
  onClick(){
    Actions.login();
  }

  render(){
    let cardStyle = {
      'maxWidth': '800px',
      'margin': '30px auto',
      'padding': '50px'
    };

    return (
      <Card style={ cardStyle }>
        <CardText style={{ 'textAlign': 'center' }}>
          To start chatting away, please log in with your Google account.
        </CardText>
        <RaisedButton style={{ display: 'block', }}
                      onClick={this.onClick.bind(this)}
                      label="Log in with Google" primary={true} />
      </Card>
    );
  }
}
