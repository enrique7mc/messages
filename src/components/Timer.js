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

  componentWillReceiveProps (nextProps) {
    if (nextProps.offset === 0) {
      cancelAnimationFrame(this._interval);
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

    return `${m} : ${s}`;
  }

  getCurrentTeamTime (time) {
    let dateTime = new Date(time);
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let currentTime = minutes % 8;
    if ((currentTime / 5) >= 1) {
      return this.format(((currentTime - 5) * 1000 * 60) + (seconds * 1000));
    } else {
      return this.format((currentTime * 1000 * 60) + (seconds * 1000));
    }
  }

  getCurrentTeam (time) {
    time = new Date(time);
    let minutes = time.getMinutes();
    let segment = Math.floor(minutes / 8);
    let currentTime = minutes % 8;
    if ((currentTime / 5) >= 1) {
      return this.props.channels[segment] + ' Q & A';
    } else {
      return this.props.channels[segment];
    }
  }

  render() {
    const style = {
      margin: 5,
    };

    let { time, isUserAdmin, isOn } = this.props;

    return (
      <div style={ this.props.style }>
        <h1>{ `Equipo: ${this.getCurrentTeam(time)} (${this.getCurrentTeamTime(time)})` }</h1>
        <h2>Tiempo total: {this.format(time)}</h2>
        { isUserAdmin ? <RaisedButton label={ isOn ? 'Detener' : 'Iniciar' }
          onClick={isOn ? this.stop : this.start}
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
