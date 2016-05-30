import alt from '../alt';
import firebase from '../services/firebaseService';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  login (browserHistory) {
    return (dispatch) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {        
        dispatch(result.user);
        browserHistory.push('/chat');
      }).catch(function(error) {
        console.log(error.message);
      });
    }
  }
}

export default alt.createActions(Actions);
