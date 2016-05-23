import React, { Component } from 'react';
import Card from 'material-ui/Card';
import { ListItem } from 'material-ui/List';

export default class MessageBox extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const cardStyle = {
      maxWidth: 1200,
      margin: '30px auto',
      padding: 30
    }

    const textAreaStyle = {
      width: '100%',
      borderColor: '#D0D0D0',
      resize: 'none',
      borderRadius: 3,
      minHeight: 50,
      color: '#555',
      fontSize: 14,
      outline: 'auto 0px'
    }

    return (
      <Card style={ cardStyle }>
        <textarea style={ textAreaStyle }/>
      </Card>
    );
  }
}
