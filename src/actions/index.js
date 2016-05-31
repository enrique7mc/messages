import alt from '../alt';
import firebase from '../services/firebaseService';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
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

  authChanged (browserHistory) {
    return (dispatch) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(user);
          browserHistory.push('/chat');
        } else {
          console.log('no user');
        }
      });
    }
  }

  decreaseTime () {
    return (dispatch) => {
      dispatch();
    }
  }
}

export default alt.createActions(Actions);
