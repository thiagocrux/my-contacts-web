import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import useContainer from './useContainer';

export default function NewContact() {
  const { contactFormRef, handleSubmit } = useContainer();

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
