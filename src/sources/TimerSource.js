import Actions from '../actions';
import firebase from '../services/firebaseService';
const firebaseRef = firebase.database().ref('initialTime');

let TimerSource = {
  saveInitialTime: {
    remote (state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve();
        }

        let update = {};
        console.log('offset ' + state.offset);
        update['offset'] = state.offset;
        firebaseRef.update(update);
        resolve();
      });
    },
    success: Actions.messageSuccess,
    error: Actions.messageError
  },
  getInitialTime: {
    remote (state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once('value').then((data) => {
            let initialTime = data.val();
            resolve(initialTime);

            firebaseRef.on('child_changed', (data) => {
              console.log('child_changed');
              let newOffset = data.val();
              Actions.timerChanged(newOffset);
            });
          });
      })
    },
    success: Actions.timeReceived,
    error: Actions.messageError
  },
  stopTimer: {
    remote (state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve();
        }

        let update = {};
        update['offset'] = 0;
        firebaseRef.update(update);
        resolve();
      });
    },
    success: Actions.messageSuccess,
    error: Actions.messageError
  }
};

export default TimerSource;
