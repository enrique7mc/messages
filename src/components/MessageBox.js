import React, { Component, PropTypes } from 'react';
import Actions from '../actions';
import Card from 'material-ui/Card';
import { ListItem } from 'material-ui/List';
import trim from 'trim';

export default class MessageBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.message !== nextState.message;
  }

  onChange (e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyUp (e) {
    if (e.keyCode === 13 && trim(e.target.value) != '') {
      e.preventDefault();

      Actions.sendMessage(this.state.message);
      this.setState({
        message: ''
      });
    }
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
        <textarea style={ textAreaStyle }
                  value={ this.state.message }
                  onChange={ this.onChange.bind(this) }
                  onKeyUp={ this.onKeyUp.bind(this) }/>
      </Card>
    );
  }
}
