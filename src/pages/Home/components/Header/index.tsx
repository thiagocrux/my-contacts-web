import { Link } from 'react-router';

import { Container } from './styles';

type Props = {
  hasError: boolean;
  contactsQuantity: number;
  filteredContactsQuantity: number;
};

export default function Header({
  hasError,
  contactsQuantity,
  filteredContactsQuantity,
}: Props) {
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
      <Link to="../new">Novo contato</Link>
    </Container>
  );
}
