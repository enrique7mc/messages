import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

export default class Channel extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ListItem>
        { this.props.channel }
      </ListItem>
    );
  }
}
