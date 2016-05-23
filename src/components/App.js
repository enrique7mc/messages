import React, { Component } from 'react';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const config = {
    apiKey: "AIzaSyBQA2T1JEm51AH64YPcA-5jdyQi9aUV9cg",
    authDomain: "react-chat-ebab2.firebaseapp.com",
    databaseURL: "https://react-chat-ebab2.firebaseio.com",
    storageBucket: "react-chat-ebab2.appspot.com",
};
firebase.initializeApp(config);
const database = firebase.database();

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount () {
    this.firebaseRef = database.ref('messages');
    this.firebaseRef.once('value').then((data) => {
      let messagesVal = data.val();
      let messages = _(messagesVal)
          .keys()
          .map((messageKey) => {
            let cloned = _.clone(messagesVal[messageKey]);
            cloned.key = messageKey;
            return cloned;
          })
          .value();
      this.setState({
        messages: messages
      });
    });
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: getMuiTheme()
    };
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flowFlow: 'row wrap',
      maxWidth: 1200,
      width: '100%',
      margin: '30px auto 30px'
    }
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme() }>
        <div>
          <AppBar
              title="Awesome Chat"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <div style={ containerStyle }>
            <ChannelList />
            <MessageList messages={ this.state.messages } />
          </div>
          <MessageBox />
        </div>
      </MuiThemeProvider>
    );
  }
}
