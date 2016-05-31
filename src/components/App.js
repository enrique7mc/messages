import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import firebase from '../services/firebaseService';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Actions from '../actions';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    Actions.authChanged(browserHistory);
    /* this.firebaseRef.on('child_removed', (data) => {
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

  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme() }>
        <div>
          <AppBar
              title="Awesome Chat"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
          { this.props.children }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
