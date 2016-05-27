import Actions from '../actions';
import firebase from '../services/firebaseService';
const firebaseRef = firebase.database().ref('channels');

let ChannelSource = {
  getChannels: {
    remote (state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once('value').then((data) => {
          let channels = data.val();
          resolve(channels);
        });
      })
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
};

export default ChannelSource;
