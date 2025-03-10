import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import ContactsList from './components/ContactsList';
import EmptyList from './components/EmptyList';
import ErrorStatus from './components/ErrorStatus';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import SearchNotFound from './components/SearchNotFound';
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

  return (
    <Container>
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && !hasError && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}
      <Header
        contactsQuantity={contacts.length}
        filteredContactsQuantity={filteredContacts.length}
        hasError={hasError}
      />
      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && <EmptyList />}
          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFound searchTerm={searchTerm} />
          )}
          <ContactsList
            orderBy={orderBy}
            filteredContacts={filteredContacts}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />
        </>
      )}
      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
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
