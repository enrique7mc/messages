import React, { Component, PropTypes } from 'react';
import Message from './Message';
import Card from 'material-ui/Card';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import List from 'material-ui/List';
import _ from 'lodash';

@connectToStores
export default class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render () {
    let messagesNodes = null;
    let { messages } = this.props;
    if (messages) {
      messagesNodes = _(messages)
        .keys()
        .map((k) => {
          let message = messages[k];
          return (
            <Message key={ k } message={ message.message }
              profilePic={ message.profilePic } />
          );
        })
        .value();
    }

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
