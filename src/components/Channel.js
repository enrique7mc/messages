import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Actions from '../actions';

const Channel = (props) => {
  function onClick () {
    Actions.channelOpened(props.channel);
  }

  let style = {};
  if (props.channel.selected) {
    style.backgroundColor = '#f0f0f0';
  }

  return (
    <ListItem onClick={ onClick } style={ style }>
      { props.channel.name }
    </ListItem>
  );
}

export default Channel;
