import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// @ts-expect-error TS(6142): Module './components/App' was resolved to '/home/t... Remove this comment to see the full error message
import App from './components/App';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
createRoot(document.getElementById('root')).render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <StrictMode>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <App />
  </StrictMode>
);
