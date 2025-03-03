import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);
        contactFormRef.current.fillFormFields(contact);
        setIsLoading(false);
      } catch {
        navigate('/');

        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, navigate]);

  function handleSubmit() {
    // ...
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Mateus Silva" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
