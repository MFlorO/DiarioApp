import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  shadows: [ 'none', '0px 5px 5px rgba(0, 0, 0, 0.2)']
});

export default theme