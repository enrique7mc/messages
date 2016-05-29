import React, { Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';
import ChannelList from './ChannelList';
import MessageBox from './MessageBox';
import MessageList from './MessageList';
import Login from './Login';
import AppBar from 'material-ui/AppBar';
import firebase from '../services/firebaseService';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

@connectToStores
class App extends Component {
  constructor () {
    super();
    this.database = firebase.database();

    this.state = {
      messages: {}
    }
  }

  static getStores () {
    return [ChatStore];
  }

  static getPropsFromStores () {
    return ChatStore.getState();
  }

  componentDidMount () {
    this.firebaseRef = this.database.ref('messages');
    /* this.firebaseRef.off();
    this.firebaseRef.on('child_added', (data) => {
      if(this.state.messages[data.key]) {
        return;
      }

      let messageVal = data.val();
      let setUpdate = {};
      setUpdate[data.key] = { $set: messageVal }
      let newState = update(this.state.messages, setUpdate);
      this.setState({ messages: newState});
    });

    this.firebaseRef.on('child_removed', (data) => {
      // check this later
      delete this.state.messages[data.key];
      this.setState({ messages: this.state.messages });
    });*/
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: getMuiTheme()
    };
  }

  onNewMessage (message) {
    let newKey = this.firebaseRef.push().key;
    let update = {};
    update[`${newKey}`] = { message: message };
    this.firebaseRef.update(update);
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flowFlow: 'row wrap',
      maxWidth: 1200,
      width: '100%',
      margin: '30px auto 30px'
    };

    let view = <Login />;
    if (this.props.user) {
      view = (
        <div>
          <div style={ containerStyle }>
            <ChannelList />
            <MessageList messages={ _.values(this.state.messages) } />
          </div>
          <MessageBox onNewMessage={ this.onNewMessage.bind(this) }/>
        </div>
      );
    }
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme() }>
        <div>
          <AppBar
              title="Awesome Chat"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
          { view }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
