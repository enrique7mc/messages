import React, { Component, PropTypes } from 'react';
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
    let { channel, isUserAdmin } = this.props;
    if (channel.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    let linkStyle = {
      textDecoration: 'none',
      color: '#155063'
    };

    let icon = isUserAdmin ? <Delete onClick={ this.delete } /> : null;

    return (
      <ListItem style={ style } rightIcon={ icon }>
        <Link to={`/chat/${channel.key}`} style={ linkStyle }>
          { channel.name }
        </Link>
      </ListItem>
    );
  }
}

Channel.propTypes = {
  isUserAdmin: PropTypes.bool
}

export default Channel;
