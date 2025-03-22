// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../Spinner' was resolved to '/home/thiago/... Remove this comment to see the full error message
import Spinner from '../Spinner';

import { Container } from './styles';

export default function FormGroup({
  children,
  error = null,
  isLoading = false
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="form-item">
        {children}
        {isLoading && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="loader">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Spinner size={16} />
          </div>
        )}
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};
