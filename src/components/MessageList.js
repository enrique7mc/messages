import React, { Component } from 'react';
import Message from './Message';

export default class MessageList extends Component {
  constructor (props) {
    super(props);
    this.state =  {
      messages: [
        'this is the first message!!',
        'other message'
      ]
    };
  }

  render () {
    let messagesNodes = this.state.messages.map((message, i) => {
      return (
        <Message key={ i } message={ message }/>
      );
    });

    return (
      <div>{ messagesNodes }</div>
    );
  }
}
