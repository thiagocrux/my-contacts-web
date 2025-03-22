import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import isAbortError from '../../utils/isAbortError';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
        contact.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      ),
    [contacts, deferredSearchTerm]
  );

  const loadContacts = useCallback(
    async (signal: any) => {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(
          orderBy,
          signal
        );

        setHasError(false);
        setContacts(contactsList);
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }

        setHasError(true);
        setContacts([]);
      } finally {
        setIsLoading(false);
      }
    },
    [orderBy]
  );

  useEffect(() => {
    const controller = new AbortController();
    loadContacts(controller.signal);

    return () => {
      controller.abort();
    };
  }, [loadContacts]);

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }, []);

  function handleChangeSearchTerm(event: any) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    loadContacts();
  }

  const handleDeleteContact = useCallback((contact: any) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      await ContactsService.deleteContact(contactBeingDeleted.id);
      handleCloseDeleteModal();

      setContacts((prevState) =>
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
      );

      toast({ type: 'success', text: 'Contato deletado com sucesso!' });
    } catch {
      toast({ type: 'danger', text: 'Ocorreu um erro ao deletar o contato!' });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
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
  };
}
