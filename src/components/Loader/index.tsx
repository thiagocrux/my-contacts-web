// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../../hooks/useAnimatedUnmount' was resolv... Remove this comment to see the full error message
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
// @ts-expect-error TS(6142): Module '../ReactPortal' was resolved to '/home/thi... Remove this comment to see the full error message
import ReactPortal from '../ReactPortal';
// @ts-expect-error TS(6142): Module '../Spinner' was resolved to '/home/thiago/... Remove this comment to see the full error message
import Spinner from '../Spinner';

import { Overlay } from './styles';

export default function Loader({
  isLoading
}: any) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactPortal containerId="loader-root">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Overlay ref={animatedElementRef} $isLeaving={!isLoading}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
