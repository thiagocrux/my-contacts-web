import { ThemeProvider } from 'styled-components';

import Routes from '../../Routes';
import Header from '../Header';
import ToastContainer from '../Toast/ToastContainer';

import GlobalStyles from '../../assets/styles/globals';
import defaultTheme from '../../assets/styles/themes/default';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer />
      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
