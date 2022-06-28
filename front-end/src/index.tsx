import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './assets/Theme';
import Navigation from './navigation';
import './index.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>,
  document.getElementById('root')
);