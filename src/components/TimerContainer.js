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

    if (this.props.offsetFetched) {
      return (
        <Timer time={ this.props.time } isOn={ this.props.isOn }
          offset={ this.props.offset } />
      );
    }

    return (
      <CircularProgress style={ progressStyle } />
    );

  }
}

export default TimerContainer;
