import React, { Component, PropTypes } from 'react';
import Message from './Message';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import _ from 'lodash';

export default class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let messagesNodes = this.props.messages.map((message, i) => {
      return (
        <Message key={ i } message={ message.message }/>
      );
    });

    const cardStyle = {
      flexGrow: 1,
      marginLeft: 30
    };

    return (
      <Card style={ cardStyle }>
        <List>
          { messagesNodes }
        </List>
      </Card>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array
}
