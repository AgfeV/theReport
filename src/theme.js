import { red, blue, deepPurple, purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    type: 'dark',
    background:{ 
      default:'#212121'
    }
  },
});

export default theme;
