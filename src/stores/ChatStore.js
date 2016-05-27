import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';
import _ from 'lodash';

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {
  constructor () {
    this.state = {
      user: null
    };
  }

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
    let selectedChannel;
    let returnedChannels = {};
    console.log(channels);
    _(channels)
      .keys()
      .forEach((key, index) => {
        console.log(key);
        returnedChannels[key] = channels[key];
        returnedChannels[key].key = key;
        if (index === 0){
          returnedChannels[key].selected = true;
          selectedChannel = channels[key];
        }
      });
    // console.log(returnedChannels);
    this.setState({
      channels: returnedChannels,
      selectedChannel
    });
  }

  @bind(Actions.login)
  login (user) {
    this.setState({
      user: user
    });
  }
}

export default alt.createStore(ChatStore);
