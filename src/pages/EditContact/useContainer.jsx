import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

export default function useContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.fillFormFields(contact);
          setContactName(contact.name);
          setIsLoading(false);
        });
      } catch {
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
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contact) {
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
