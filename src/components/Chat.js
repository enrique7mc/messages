import React, { Component } from 'react';
import ChannelList from './ChannelList';
import CountdownContainer from './CountdownContainer';
import MessageBox from './MessageBox';
import MessageList from './MessageList';

const Chat = (props) => {
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
        <ChannelList { ...props } />
        <MessageList />
      </div>
      <MessageBox />
      <CountdownContainer timeleft={ 298 } />
    </div>
  );
}

export default Chat;
