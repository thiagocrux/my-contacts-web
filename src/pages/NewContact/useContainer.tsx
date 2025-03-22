import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import { ContactFormInput, ContactFormRef } from '../../types';
import { toast } from '../../utils';

export default function useContainer() {
  const contactFormRef = useRef<ContactFormRef>(null);

  async function handleSubmit(contact: ContactFormInput) {
    try {
      await ContactsService.createContact(contact);
      contactFormRef.current?.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return { contactFormRef, handleSubmit };
}
