import React, { Component } from 'react';
import ChannelList from './ChannelList';
import Timer from './Timer';
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class Chat extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    ChatStore.getInitialTime();
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
        <Timer time={ this.props.time } isOn={ this.props.isOn } />
      </div>
    );
  }
}

export default Chat;
