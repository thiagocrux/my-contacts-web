import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import { ContactFormInput, ContactFormRef } from '../../types';
import isAbortError from '../../utils/isAbortError';
import toast from '../../utils/toast';

export default function useContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef<ContactFormRef>(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          String(id),
          controller.signal
        );

        safeAsyncAction(() => {
          contactFormRef.current?.fillFormFields(contact);
          setContactName(contact.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }

        safeAsyncAction(() => {
          navigate('/');

          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contactFormInput: ContactFormInput) {
    try {
      const updatedContact = await ContactsService.updateContact(
        String(id),
        contactFormInput
      );

      setContactName(updatedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return { isLoading, contactName, contactFormRef, handleSubmit };
}
