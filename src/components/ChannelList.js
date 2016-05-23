import React, { Component } from 'react';
import Channel from './Channel';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

export default class ChannelList extends Component {
  constructor (props) {
    super(props);
    this.state =  {
      channels: [
        'dogs',
        'cats'
      ]
    };
  }

  render () {
    let channelNodes = this.state.channels.map((channel, i) => {
      return (
        <Channel key={ i } channel={ channel } />
      );
    });

    const cardStyle = {
      flexGrow: 1
    };

    return (
      <Card style={ cardStyle }>
        <List>
          { channelNodes }
        </List>
      </Card>
    );
  }
}
