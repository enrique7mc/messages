import Actions from '../actions';
import firebase from '../services/firebaseService';
let firebaseRef = null;

let MessageSource = {
  sendMessage: {
    remote (state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve();
        }

        let newKey = firebaseRef.push().key;
        let update = {};
        update[`${newKey}`] = {
          message: state.message,
          date: new Date().toUTCString(),
          author: state.user.displayName,
          userId: state.user.uid,
          profilePic: state.user.photoURL
        };
        firebaseRef.update(update);
        resolve();
      });
    },
    success: Actions.messageSuccess,
    error: Actions.messageError
  },
  getMessages: {
    remote (state) {
      if (firebaseRef) {
        firebaseRef.off();
      }
      let key = state.selectedChannel ? state.selectedChannel.key : '';
      firebaseRef = firebase.database().ref('messages/' + key);
      return new Promise((resolve, reject) => {
        firebaseRef.once('value').then((data) => {
          let messages = data.val() || {};
          resolve(messages);

          firebaseRef.on('child_added', (msg) => {
            let messageVal = msg.val();
            messageVal.key = msg.key;
            Actions.messageReceived(messageVal);
          });
        });
      })
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
};

export default MessageSource;
