// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../../hooks/useAnimatedUnmount' was resolv... Remove this comment to see the full error message
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
// @ts-expect-error TS(6142): Module '../Button' was resolved to '/home/thiago/p... Remove this comment to see the full error message
import Button from '../Button';
// @ts-expect-error TS(6142): Module '../ReactPortal' was resolved to '/home/thi... Remove this comment to see the full error message
import ReactPortal from '../ReactPortal';

import { Container, Footer, Overlay } from './styles';

export default function Modal({
  danger = false,
  visible,
  isLoading = false,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm
}: any) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ReactPortal containerId="modal-root">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Overlay ref={animatedElementRef} $isLeaving={!visible}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Container $danger={danger}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <h1>{title}</h1>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="modal-body">{children}</div>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Footer>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button
              className="cancel-button"
              type="button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button danger={danger} onClick={onConfirm} isLoading={isLoading}>
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
