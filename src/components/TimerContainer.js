import React, { Component } from 'react';
import Actions from '../actions';
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
    return (
      <Timer time={ this.props.time } isOn={ this.props.isOn } />
    );
  }
}

export default TimerContainer;
