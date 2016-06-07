import React, { Component } from 'react';
import ChannelList from './ChannelList';
import TimerContainer from './TimerContainer';
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

  isUserAdmin () {
    if (this.props.user) {
      return this.props.user.uid === 'goE7lZiXOVXNXTyIIn3YhiwW8Zg2';
    }
  }

  render () {
    const containerStyle = {
      display: 'flex',
      flowFlow: 'row wrap',
      maxWidth: 1200,
      height: 300,
      width: '100%',
      margin: '30px auto'
    };

    return (
      <div>
        <div style={ containerStyle }>
          <ChannelList { ...this.props } isUserAdmin={ this.isUserAdmin() } />
          <MessageList { ...this.props } />
        </div>
        <MessageBox />
        <TimerContainer
          channels={ this.props.channels }
          isUserAdmin={ this.isUserAdmin() } />
      </div>
    );
  }
}

Chat.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Chat;
