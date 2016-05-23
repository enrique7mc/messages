import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

export default class Message extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListItem
        leftAvatar={<Avatar src='https://placehold.it/100x100' />}
      >{ this.props.message }</ListItem>
    );
  }
}
