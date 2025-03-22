import { memo } from 'react';
import { Link } from 'react-router';

import { arrow, edit, trash } from '../../../../assets';
import { Contact } from '../../../../types';

import { Card, ListHeader } from './styles';

export type Props = {
  orderBy: 'asc' | 'desc';
  filteredContacts: Contact[];
  onToggleOrderBy: () => void;
  onDeleteContact: (contact: Contact) => void;
};

function ContactsList({
  orderBy,
  filteredContacts,
  onToggleOrderBy,
  onDeleteContact,
}: Props) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader $orderBy={orderBy}>
          <button
            type="button"
            className="sort-button"
            onClick={onToggleOrderBy}
          >
            <span>Nome</span> <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}
      {filteredContacts.map((contact: Contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category?.name && <small>{contact.category.name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`../edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

export default memo(ContactsList);
