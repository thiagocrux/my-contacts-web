// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { useEffect, memo } from 'react';

// @ts-expect-error TS(2307): Cannot find module '../../../assets/images/icons/x... Remove this comment to see the full error message
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
// @ts-expect-error TS(2307): Cannot find module '../../../assets/images/icons/c... Remove this comment to see the full error message
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

import { Container } from './styles';

function ToastMessage({
  message,
  isLeaving,
  onRemoveMessage,
  animatedRef
}: any) {
  useEffect(() => {
    const timeoutId = setTimeout(
      () => onRemoveMessage(message.id),
      message.duration
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container
      ref={animatedRef}
      // @ts-expect-error TS(2769): No overload matches this call.
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      $isLeaving={isLeaving}
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {message.type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  animatedRef: PropTypes.shape().isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};

export default memo(ToastMessage);
