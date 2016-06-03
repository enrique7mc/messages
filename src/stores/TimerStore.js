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
    console.log('2. TimerStore startTimer');
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
        offset: offset
      });
      setTimeout(this.getInstance().saveInitialTime, 10);
    }
  }

  @bind(Actions.timeReceived)
  receivedTime (initialTime) {
    console.log('TimerStore receivedTime offset: ' + initialTime.offset);
    if (initialTime.offset) {
      this.setState({
        isOn: true,
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
