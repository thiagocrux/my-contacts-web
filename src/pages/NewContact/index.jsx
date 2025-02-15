import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId || null,
      };

      const response = await ContactsService.createContact(contact);

      // FIXME: Apagar log
      console.log(response);
    } catch (error) {
      // TODO: Implementar lógica de erro
      alert('Ocorreu um erro ao cadastrar o contato');
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
