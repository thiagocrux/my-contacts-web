import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useContainer() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact: any) {
    try {
      await ContactsService.createContact(contact);
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      contactFormRef.current.resetFields();

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
