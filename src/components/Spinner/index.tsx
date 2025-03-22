// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { StyledSpinner } from './styles';

export default function Spinner({ size = 32 }) {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <StyledSpinner size={size} />;
}

Spinner.propTypes = {
  size: PropTypes.number,
};
