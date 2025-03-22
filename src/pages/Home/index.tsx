// @ts-expect-error TS(6142): Module '../../components/Loader' was resolved to '... Remove this comment to see the full error message
import Loader from '../../components/Loader';
// @ts-expect-error TS(6142): Module '../../components/Modal' was resolved to '/... Remove this comment to see the full error message
import Modal from '../../components/Modal';
// @ts-expect-error TS(6142): Module './components/ContactsList' was resolved to... Remove this comment to see the full error message
import ContactsList from './components/ContactsList';
// @ts-expect-error TS(6142): Module './components/EmptyList' was resolved to '/... Remove this comment to see the full error message
import EmptyList from './components/EmptyList';
// @ts-expect-error TS(6142): Module './components/ErrorStatus' was resolved to ... Remove this comment to see the full error message
import ErrorStatus from './components/ErrorStatus';
// @ts-expect-error TS(6142): Module './components/Header' was resolved to '/hom... Remove this comment to see the full error message
import Header from './components/Header';
// @ts-expect-error TS(6142): Module './components/InputSearch' was resolved to ... Remove this comment to see the full error message
import InputSearch from './components/InputSearch';
// @ts-expect-error TS(6142): Module './components/SearchNotFound' was resolved ... Remove this comment to see the full error message
import SearchNotFound from './components/SearchNotFound';
// @ts-expect-error TS(6142): Module './useContainer' was resolved to '/home/thi... Remove this comment to see the full error message
import useContainer from './useContainer';

import { Container } from './styles';

export default function Home() {
  const {
    contactBeingDeleted,
    contacts,
    filteredContacts,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    handleDeleteContact,
    handleToggleOrderBy,
    handleTryAgain,
    hasError,
    isDeleteModalVisible,
    isLoading,
    isLoadingDelete,
    orderBy,
    searchTerm,
  } = useContainer();

  const hasContacts = contacts.length > 0;
  const isContactsListEmpty = !hasError && !isLoading && !hasContacts;
  const hasNoSearchResult =
    !hasError && hasContacts && filteredContacts.length < 1;

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Loader isLoading={isLoading} />

      {hasContacts && !hasError && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header
        contactsQuantity={contacts.length}
        filteredContactsQuantity={filteredContacts.length}
        hasError={hasError}
      />

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {isContactsListEmpty && <EmptyList />}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      {hasNoSearchResult && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ContactsList
          orderBy={orderBy}
          filteredContacts={filteredContacts}
          onToggleOrderBy={handleToggleOrderBy}
          onDeleteContact={handleDeleteContact}
        />
      )}

      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        Esta ação não poderá ser desfeita!
      </Modal>
    </Container>
  );
}
