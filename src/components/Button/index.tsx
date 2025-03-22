// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../Spinner' was resolved to '/home/thiago/... Remove this comment to see the full error message
import Spinner from '../Spinner';

import { StyledButton } from './styles';

export default function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onClick
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      // @ts-expect-error TS(2769): No overload matches this call.
      $danger={danger}
      onClick={onClick}
    >
      {!isLoading && children}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};
