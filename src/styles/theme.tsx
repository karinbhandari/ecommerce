import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import utilities from './utilities'
import { muiDataTables } from './mui-datatables'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Jost',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      light: '#5a9290',
      main: '#2b6463',
    },
    secondary: {
      main: '#525252',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
      paper: '#FFFFFF',
    },
    grey: {
      50: '#DDDDDD',
      100: '#CCCCCC',
      200: '#717171',
    },
    common: {
      black: '#333333', // button
      white: '#ffffff',
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // find a good styling for this
  ...utilities,
  ...muiDataTables,
})

export default theme
