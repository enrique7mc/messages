import React, { Component, PropTypes } from 'react';
import Actions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

class Timer extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount () {
    if (this.props.offset > 0) {
      this._interval = requestAnimationFrame(this.progress);
    }
  }

	componentWillUnmount() {
		if (this._interval) cancelAnimationFrame(this._interval);
	}

  start() {
		this._interval = requestAnimationFrame(this.progress);
    Actions.startTimer(Date.now());
  }

	progress = () => {
    Actions.tick(Date.now());
		this._interval = requestAnimationFrame(this.progress);
	}

  stop() {
		cancelAnimationFrame(this._interval);
    Actions.stopTimer();
  }

  click() {
    this.props.isOn ? start() : stop();
  }

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = '0' + time;
      }
      return time;
    }

    time = new Date(time);
    let m = pad(time.getMinutes().toString(), 2);
    let s = pad(time.getSeconds().toString(), 2);
    let ms = pad(time.getMilliseconds().toString(), 3);

    return `${m} : ${s} . ${ms}`;
  }

  render() {
    const style = {
      margin: 5,
    };

    return (
      <div style={ this.props.style }>
        <h1>Time: {this.format(this.props.time)}</h1>
        { this.props.isUserAdmin ? <RaisedButton label={ this.props.isOn ? 'Stop' : 'Start' }
          onClick={this.props.isOn ? this.stop : this.start}
          primary={true} style={style} /> : '' }
      </div>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number,
  isOn: PropTypes.bool,
  offset: PropTypes.number
};

export default Timer;
