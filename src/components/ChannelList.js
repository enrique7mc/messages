import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import Channel from './Channel';
import Card from 'material-ui/Card';
import List from 'material-ui/List';

@connectToStores
export default class ChannelList extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.selectedChannel);
  }

  componentWillReceiveProps (nextProps) {
    if (this.selectedChannel !== nextProps.params.channel) {
      this.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.selectedChannel);
    }
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores () {
    return ChatStore.getState();
  }

  render () {
    let { channels } = this.props;
    let progressStyle = {
      paddingTop: 20,
      paddingBottom: 20,
      margin: '0 auto',
      display: 'block',
      width: 60
    };

    const cardStyle = {
      flexGrow: 1
    };

    if (!channels) {
      return (
        <Card style={ cardStyle }>
          <CircularProgress style={ progressStyle }/>
        </Card>
      );
    }

    let channelNodes = _(channels)
      .keys()
      .map((k) => {
        let channel = channels[k];
        return (
          <Channel key={ k } channel={ channel } />
        );
      })
      .value();

    return (
      <Card style={ cardStyle }>
        <List style={{backgroundColor: '#FFFFFF'}}>
          { channelNodes }
        </List>
      </Card>
    );
  }
}
