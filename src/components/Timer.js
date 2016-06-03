import React from 'react';
import Actions from '../actions';
import RaisedButton from 'material-ui/RaisedButton';

class Timer extends React.Component {
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

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={ containerStyle }>
        <h1>Time: {this.format(this.props.time)}</h1>
        <RaisedButton label={ this.props.isOn ? 'Stop' : 'Start' }
          onClick={this.props.isOn ? this.stop : this.start}
          primary={true} style={style} />
      </div>
    );
  }
}

export default Timer;
