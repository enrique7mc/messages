import React, { Component } from 'react';
import Countdown from './Countdown';
import RaisedButton from 'material-ui/RaisedButton';

const minute = 60;
const hour = 60 * minute;

export default class CountdownContainer extends Component {
  constructor (props) {
    super(props);
  }

  onClick () {
    console.log('start');
  }

  render() {
    let { timeleft } = this.props;

    const minutes = Math.floor(timeleft / minute);
    timeleft = timeleft % minute;
    const seconds = timeleft;

    const props = { minutes, seconds };
    return (
      <div>
        <Countdown {...props} />
        <RaisedButton style={{ display: 'block' }}
                      onClick={ this.onClick }
                      label='Start' primary={ true } />
      </div>
    );
  }
}
