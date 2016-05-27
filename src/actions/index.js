import alt from '../alt';
import firebase from '../services/firebaseService';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed'
    );
  }

  login (args) {
    return (dispatch) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user);
        dispatch(result.user);
      }).catch(function(error) {
        console.log(error.message);
      });
    }
  }
}

export default alt.createActions(Actions);
