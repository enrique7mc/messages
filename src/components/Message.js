import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const Message = (props) => {
  return (
    <ListItem
      leftAvatar={<Avatar src='https://placehold.it/100x100' />}>
      { props.message }
    </ListItem>
  );
}

export default Message;
