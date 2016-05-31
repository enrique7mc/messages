import React, { Component } from 'react';
import ChannelList from './ChannelList';
import CountdownContainer from './CountdownContainer';
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import connectToStores from 'alt-utils/lib/connectToStores';
import CountdownStore from '../stores/CountdownStore';

@connectToStores
class Chat extends Component {
  constructor (props) {
    super(props);
  }

  static getStores () {
    return [CountdownStore];
  }

  static getPropsFromStores() {
    return CountdownStore.getState();
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
          <MessageList />
        </div>
        <MessageBox />
        <CountdownContainer timeleft={ this.props.timeleft } />
      </div>
    );
  }
}

export default Chat;
