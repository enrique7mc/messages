import React, { Component } from 'react';
import Actions from '../actions';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router'
import Delete from 'material-ui/svg-icons/action/delete';

class Channel extends Component {
  constructor (props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete () {
    this.props.delete(this.props.channel.key);
  }

  render () {
    let style = {};
    let { channel } = this.props;
    if (channel.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    let linkStyle = {
      textDecoration: 'none',
      color: '#155063'
    };

    return (
      <ListItem style={ style } rightIcon={<Delete onClick={ this.delete } />}>
        <Link to={`/chat/${channel.key}`} style={ linkStyle }>
          { channel.name }
        </Link>
      </ListItem>
    );
  }
}

export default Channel;
