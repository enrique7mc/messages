import Actions from '../actions';
import firebase from '../services/firebaseService';
const firebaseRef = firebase.database().ref('channels');

let ChannelSource = {
  getChannels: {
    remote (state, selectedChannelKey) {      
      return new Promise((resolve, reject) => {
        firebaseRef.once('value').then((data) => {
          let channels = data.val();
          selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
          let selectedChannel = channels[selectedChannelKey];
          if (selectedChannel) {
            selectedChannel.selected = true;
          }
          resolve(channels);
        });
      })
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
};

export default ChannelSource;
