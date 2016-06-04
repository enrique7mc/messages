import React, { Component, PropTypes } from 'react';
var ReactDOM = require('react-dom');
import Message from './Message';
import CircularProgress from 'material-ui/CircularProgress';
import Card from 'material-ui/Card';
import List from 'material-ui/List';
import _ from 'lodash';

export default class MessageList extends Component {
  constructor (props) {
    super(props);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.messages !== nextProps.messages;
  }

  componentDidUpdate () {
    var domNode = ReactDOM.findDOMNode(this.refs.card);
    domNode.scrollTop = domNode.scrollHeight;
  }

  render () {
    let messagesNodes = null;
    let { messages, messagesLoading } = this.props;

    let progressStyle = {
      paddingTop: 20,
      paddingBottom: 20,
      margin: '0 auto',
      display: 'block',
      width: 60
    };

    if (!messagesLoading) {
      messagesNodes = _(messages)
        .keys()
        .map((k) => {
          let message = messages[k];
          return (
            <Message key={ k } message={ message.message }
              profilePic={ message.profilePic }
              author={ message.author } />
          );
        })
        .value();
    } else {
      messagesNodes = <CircularProgress style={ progressStyle }/>
    }

    const cardStyle = {
      flexGrow: 1,
      marginLeft: 30,
      overflowY: 'auto'
    };

    return (
      <Card style={ cardStyle } ref='card'>
        <List>
          { messagesNodes }
        </List>
      </Card>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.object
}
