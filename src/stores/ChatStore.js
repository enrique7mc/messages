import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import MessageSource from '../sources/MessageSource';
import _ from 'lodash';
import update from 'react-addons-update';

@datasource(ChannelSource, MessageSource)
@decorate(alt)
class ChatStore {
  constructor () {
    this.state = {
      user: null,
      messages: null,
      messagesLoading: true,
      timeleft: 299
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

  @bind(Actions.sendMessage)
  sendMessage(message) {
    console.log('Chat store: sendMessage');
    this.setState({
      message: message
    });
    setTimeout(this.getInstance().sendMessage, 10);
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

  @bind(Actions.decreaseTime)
  decreaseTime () {
    this.setState({
      timeleft: this.state.timeleft - 1
    });
  }
}

export default alt.createStore(ChatStore);
