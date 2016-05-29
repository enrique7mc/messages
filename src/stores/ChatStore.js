import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor () {
    this.state = {
      user: null,
      messageS: null
    };
  }

  @bind(Actions.messagesReceived)
  receivedMessages (messages) {
    console.log(messages);
    _(messages)
      .keys()
      .forEach((k) => {
        messages[k].key = k;
      });

   this.setState({
     messages
   });
  }

  @bind(Actions.channelOpened)
  channelOpened (selectedChannel) {
    // TODO: avoid modify this.state directly
    _(this.state.channels)
      .values()
      .forEach((channel) => {
        channel.selected = false;
      });

    selectedChannel.selected = true;
    this.setState({
      channels: this.state.channels,
      selectedChannel
    });

    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;
    let returnedChannels = {};

    _(channels)
      .keys()
      .forEach((key, index) => {
        returnedChannels[key] = channels[key];
        returnedChannels[key].key = key;
        if (index === 0){
          returnedChannels[key].selected = true;
          selectedChannel = channels[key];
        }
      });

    this.setState({
      channels: returnedChannels,
      selectedChannel
    });

    setTimeout(this.getInstance().getMessages, 100);
  }

  @bind(Actions.login)
  login (user) {
    this.setState({
      user: user
    });
  }
}

export default alt.createStore(ChatStore);
