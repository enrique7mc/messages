import alt from '../alt';
import Actions from '../actions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class CountdownStore {
  constructor () {
    this.state = {
      timeleft: 299
    };
  }

  @bind(Actions.decreaseTime)
  decreaseTime () {
    this.setState({
      timeleft: this.state.timeleft - 1
    });
  }
}

export default alt.createStore(CountdownStore);
