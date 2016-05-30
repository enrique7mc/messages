import React, { Component } from 'react';
import Actions from '../actions';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router'


const Channel = (props) => {
  let style = {};
  if (props.channel.selected) {
    style.backgroundColor = '#f0f0f0';
  }

  let linkStyle = {
    textDecoration: 'none',
    color: '#155063'    
  }

  return (
    <ListItem style={ style }>
      <Link to={`/chat/${props.channel.key}`} style={ linkStyle }>
        { props.channel.name }
      </Link>
    </ListItem>
  );
}

export default Channel;
