import { Link } from 'react-router';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

import { Container } from './styles';
export default function Header({
  hasError,
  contactsQuantity,
  filteredContactsQuantity
}: any) {
  const alignment = hasError
    ? 'flex-end'
    : contactsQuantity > 0
    ? 'space-between'
    : 'center';

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container $justifyContent={alignment}>
      {!hasError && contactsQuantity > 0 && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>
          {filteredContactsQuantity}{' '}
          {filteredContactsQuantity === 1 ? 'contato' : 'contatos'}
        </strong>
      )}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to="../new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsQuantity: PropTypes.number.isRequired,
  filteredContactsQuantity: PropTypes.number.isRequired,
};
