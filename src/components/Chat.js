import React, { Component } from 'react';
import ChannelList from './ChannelList';
import CountdownContainer from './CountdownContainer';
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class Chat extends Component {
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
    const containerStyle = {
      display: 'flex',
      flowFlow: 'row wrap',
      maxWidth: 1200,
      width: '100%',
      margin: '30px auto 30px'
    };

    return (
      <div>
        <div style={ containerStyle }>
          <ChannelList { ...this.props } />
          <MessageList { ...this.props } />
        </div>
        <MessageBox />
        <CountdownContainer timeleft={ this.props.timeleft } />
      </div>
    );
  }
}

export default Chat;
