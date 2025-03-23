import { ThemeProvider } from 'styled-components';

import Routes from '../../Routes';
import { defaultTheme, GlobalStyles } from '../../assets';
import { Header, ToastContainer } from '../../components';

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
