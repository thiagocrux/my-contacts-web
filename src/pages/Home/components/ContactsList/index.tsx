import { memo } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import edit from '../../../../assets/images/icons/edit.svg';
// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import trash from '../../../../assets/images/icons/trash.svg';
// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import arrow from '../../../../assets/images/icons/arrow.svg';

import { Card, ListHeader } from './styles';

function ContactsList({
  orderBy,
  filteredContacts,
  onToggleOrderBy,
  onDeleteContact
}: any) {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {filteredContacts.length > 0 && (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ListHeader $orderBy={orderBy}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button
          type="button"
          className="sort-button"
          onClick={onToggleOrderBy}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>Nome</span> <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>
    )}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    {filteredContacts.map((contact: any) => <Card key={contact.id}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="info">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="contact-name">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <strong>{contact.name}</strong>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {contact.category.name && <small>{contact.category.name}</small>}
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{contact.email}</span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{contact.phone}</span>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="actions">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Link to={`../edit/${contact.id}`}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={edit} alt="Edit" />
        </Link>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <button type="button" onClick={() => onDeleteContact(contact)}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <img src={trash} alt="Delete" />
        </button>
      </div>
    </Card>)}
  </>;
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
      category: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default memo(ContactsList);
