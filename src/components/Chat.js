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

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      // this.context.router.push(`/chat/${nextProps.selectedChannel.key}`);
    }
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
      height: 300,
      width: '100%',
      margin: '30px auto'
    };

    return (
      <div>
        <div style={ containerStyle }>
          <ChannelList { ...this.props } />
          <MessageList { ...this.props } />
        </div>
        <MessageBox />
        <TimerContainer />
      </div>
    );
  }
}

Chat.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Chat;
