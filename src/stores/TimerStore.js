import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import TimerSource from '../sources/TimerSource';
import _ from 'lodash';

@datasource(TimerSource)
@decorate(alt)
class TimerStore {
  constructor () {
    this.state = {
      isOn: false,
      time: 0
    };
  }

  @bind(Actions.startTimer)
  startTimer (offset) {
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
        offset: offset
      });
      setTimeout(this.getInstance().saveInitialTime, 10);
    }
  }

  @bind(Actions.timeReceived)
  timeReceived (initialTime) {
    if (initialTime.offset) {
      this.setState({
        isOn: true,
        time: 0,
        offset: initialTime.offset,
        offsetFetched: true
      });
    } else {
      this.setState({
        isOn: false,
        time: 0,
        offsetFetched: true
      });
    }
  }

  @bind(Actions.stopTimer)
  stopTimer () {
    this.setState({
      isOn: false,
      time: 0
    });
    setTimeout(this.getInstance().stopTimer, 10);
  }

  @bind(Actions.tick)
  tick (time, offset) {
    this.setState({
      time: this.state.time + (time - this.state.offset),
      offset: time
    });
  }
}

export default alt.createStore(TimerStore);
