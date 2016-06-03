import {blue900, pink700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default getMuiTheme({
  palette: {
    primary1Color: blue900,
    accent1Color: pink700,
  },
  fontFamily: 'Roboto, sans-serif',
  appBar: {
    height: 50,
  },
});
