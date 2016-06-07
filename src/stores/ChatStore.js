import alt from '../alt';
import Actions from '../actions';
import { browserHistory } from 'react-router';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import TimerSource from '../sources/TimerSource';
import _ from 'lodash';
import update from 'react-addons-update';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor () {
    this.state = {
      user: null,
      messages: null,
      messagesLoading: true
    };
  }

  @bind(Actions.messagesLoading)
  messagesLoading () {
    this.setState({
      messagesLoading: true
    });
  }

  @bind(Actions.messageReceived)
  messageReceived (message) {
    if (this.state.messages[message.key]) {
      return;
    }

    let setUpdate = {};
    setUpdate[message.key] = { $set: message }
    let newState = update(this.state.messages, setUpdate);
    this.setState({ messages: newState});
  }

  // @bind(Actions.channelDeleted)
  // channelDeleted(channel) {
  //   console.log(channel);
  //
  //   console.log('Before delete');
  //   console.log(this.state.channels);
  //   delete this.state.channels[channel.key];
  //   console.log('After delete');
  //   console.log(this.state.channels);
  //   this.setState({ channels: this.state.channels });
  // }

  @bind(Actions.deleteChannel)
  deleteChannel (channelKey) {
    console.log('delete channel ' + channelKey);
    delete this.state.channels[channelKey];
    this.setState({
      channels: this.state.channels,
      selectedChannel: _.keys(this.state.channels)[0]
    });
    browserHistory.push(`/chat/${this.state.selectedChannel}`);
    setTimeout(this.getInstance().deleteChannel.bind(null, channelKey), 10);
  }

  @bind(Actions.sendMessage)
  sendMessage(message) {
    this.setState({
      message: message
    });
    setTimeout(this.getInstance().sendMessage, 10);
  }

  @bind(Actions.messageSuccess)
  messageSuccess() {
    console.log('Data received successfully');
  }

  @bind(Actions.messagesReceived)
  receivedMessages (messages) {
    _(messages)
      .keys()
      .forEach((k) => {
        messages[k].key = k;
      });

   this.setState({
     messages,
     messagesLoading: false
   });
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
        if (channels[key].selected) {
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

  @bind(Actions.authChanged)
  authChanged (user) {
    this.setState({
      user: user
    });
  }
}

export default alt.createStore(ChatStore);
