import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

const Channel = (props) => {
  let style = {};
  if (props.channel.selected) {
    style.backgroundColor = '#f0f0f0';
  }

  return (
    <ListItem style={ style }>
      { props.channel.name }
    </ListItem>
  );
}

export default Channel;
