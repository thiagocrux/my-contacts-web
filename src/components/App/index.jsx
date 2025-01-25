import { ThemeProvider } from 'styled-components';

import Header from '../Header';
import Routes from '../../Routes';

import GlobalStyles from '../../assets/styles/globals';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
