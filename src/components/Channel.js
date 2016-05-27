import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

export default class Channel extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let style = {};
    if (this.props.channel.selected) {
      console.log('selected');
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem style={ style }>
        { this.props.channel.name }
      </ListItem>
    );
  }
}
