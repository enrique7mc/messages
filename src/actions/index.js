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
      'messageSuccess',
      'messageError',
      'messageReceived',
      'startTimer',
      'timeReceived',
      'deleteChannel',
      'channelDeleted'
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

  loginEmail (browserHistory, email, password) {
    return (dispatch) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
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
          dispatch(user);
          browserHistory.push('/');
        }
      });
    }
  }

  stopTimer () {
    return (dispatch) => {
      dispatch();
    }
  }

  tick (time, offset) {
    return (dispatch) => {
      dispatch(time, offset);
    }
  }
}

export default alt.createActions(Actions);
