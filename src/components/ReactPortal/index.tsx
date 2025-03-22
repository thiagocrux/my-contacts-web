import ReactDOM from 'react-dom';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

export default function ReactPortal({
  containerId = 'portal-root',
  children
}: any) {
  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
}

ReactPortal.propTypes = {
  containerId: PropTypes.string,
  children: PropTypes.node.isRequired,
};
