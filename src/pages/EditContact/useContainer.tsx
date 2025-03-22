import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
// @ts-expect-error TS(6142): Module '../../hooks/useSafeAsyncAction' was resolv... Remove this comment to see the full error message
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import isAbortError from '../../utils/isAbortError';

export default function useContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(
          id,
          controller.signal
        );

        safeAsyncAction(() => {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          contactFormRef.current.fillFormFields(contact);
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

  async function handleSubmit(contact: any) {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact);
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
