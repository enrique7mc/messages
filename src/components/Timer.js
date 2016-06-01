import React from 'react';
import Actions from '../actions';

class Timer extends React.Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidMount () {
    this.start();
  }

	componentWillUnmount() {
		if (this._interval) cancelAnimationFrame(this._interval);
	}

  start() {
		this._interval = requestAnimationFrame(this.progress);

    //Actions.startTimer(Date.now());
    Actions.startTimer(1464757773962);
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
    return (
      <div>
        <h1>Time: {this.format(this.props.time)}</h1>
        <button onClick={this.props.isOn ? this.stop : this.start}>
          { this.props.isOn ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}

export default Timer;
