import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const Message = (props) => {
  let secondaryStyle = {
    fontSize: '11px',
    color: '#C3C3C3',
    fontStyle: 'italic'
  };

  let secondaryText = (
    <div style={ secondaryStyle }>{ props.author }</div>
  );
  return (
    <ListItem
      leftAvatar={ <Avatar src={ props.profilePic } /> }
      primaryText={ props.message }
      secondaryText={ secondaryText } />
  );
}

export default Message;
