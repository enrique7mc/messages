import React, { Component } from 'react';
import Actions from '../actions';
import CircularProgress from 'material-ui/CircularProgress';
import connectToStores from 'alt-utils/lib/connectToStores';
import TimerStore from '../stores/TimerStore';
import Timer from './Timer';

@connectToStores
class TimerContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    TimerStore.getInitialTime();
  }

  static getStores () {
    return [TimerStore];
  }

  static getPropsFromStores() {
    return TimerStore.getState();
  }

  render() {
    let progressStyle = {
      paddingTop: 20,
      paddingBottom: 20,
      margin: '0 auto',
      display: 'block',
      width: 60
    };

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };

    if (this.props.offsetFetched) {
      return (
        <div style={ containerStyle }>
          <Timer style={ containerStyle } time={ this.props.time } isOn={ this.props.isOn }
            offset={ this.props.offset } />
        </div>
      );
    }

    return (
      <CircularProgress style={ progressStyle } />
    );

  }
}

export default TimerContainer;
