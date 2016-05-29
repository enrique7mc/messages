import Actions from '../actions';
import firebase from '../services/firebaseService';
let firebaseRef = null;

let MessageSource = {
  getMessages: {
    remote (state) {
      if (firebaseRef) {
        firebaseRef.off();
      }

      firebaseRef = firebase.database().ref('messages/' +
        state.selectedChannel.key);
      return new Promise((resolve, reject) => {
        firebaseRef.once('value').then((data) => {
          let messages = data.val();
          resolve(messages);
        });
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
};

export default MessageSource;
