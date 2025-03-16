import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';
export default function Header({
  hasError,
  contactsQuantity,
  filteredContactsQuantity,
}) {
  const alignment = hasError
    ? 'flex-end'
    : contactsQuantity > 0
    ? 'space-between'
    : 'center';

  return (
    <Container $justifyContent={alignment}>
      {!hasError && contactsQuantity > 0 && (
        <strong>
          {filteredContactsQuantity}{' '}
          {filteredContactsQuantity === 1 ? 'contato' : 'contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactsQuantity: PropTypes.number.isRequired,
  filteredContactsQuantity: PropTypes.number.isRequired,
};
