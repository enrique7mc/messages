import Actions from '../actions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class CountdownStore {
  constructor () {
    this.state = {
    };
  }

  @bind(Actions.decreaseTime)
  decreaseTime () {
    this.setState({
    });
  }
}

