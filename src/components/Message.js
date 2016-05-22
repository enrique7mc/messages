import React, { Component } from 'react';

export default class Message extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>{ this.props.message }</div>
    );
  }
}
