import { ThemeProvider } from 'styled-components';

// @ts-expect-error TS(6142): Module '../Header' was resolved to '/home/thiago/p... Remove this comment to see the full error message
import Header from '../Header';
// @ts-expect-error TS(6142): Module '../../Routes' was resolved to '/home/thiag... Remove this comment to see the full error message
import Routes from '../../Routes';

import GlobalStyles from '../../assets/styles/globals';
import defaultTheme from '../../assets/styles/themes/default';
// @ts-expect-error TS(6142): Module '../ Toast/ToastContainer' was resolved to ... Remove this comment to see the full error message
import ToastContainer from '../ Toast/ToastContainer';

import { Container } from './styles';

function App() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ThemeProvider theme={defaultTheme}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <GlobalStyles />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ToastContainer />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
