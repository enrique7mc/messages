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

    let channels = _(this.props.channels)
                    .keys()
                    .map((k) => this.props.channels[k].name)
                    .value();

    if (this.props.offsetFetched && (this.props.isUserAdmin || this.props.offset)) {
      return (
        <div style={ containerStyle }>
          <Timer style={ containerStyle }
            channels={ channels }
            time={ this.props.time }
            isOn={ this.props.isOn }
            offset={ this.props.offset }
            isUserAdmin={ this.props.isUserAdmin } />
        </div>
      );
    }

    return <div></div>;
  }
}

export default TimerContainer;
