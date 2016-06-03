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
          // firebaseRef.on('child_removed', (data) => {
          //   let channelVal = data.val();
          //   channelVal.key = data.key;
          //   Actions.channelDeleted(channelVal)
          // });
        });
      })
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  },
  deleteChannel: {
    remote (state, channelKey) {
      return new Promise((resolve, reject) => {
        firebase.database().ref(`channels/${channelKey}`).remove();
        firebase.database().ref(`messages/${channelKey}`).remove();
        resolve();
      });
    },
    success: Actions.messageSuccess,
    error: Actions.messageError
  }
};

export default ChannelSource;
