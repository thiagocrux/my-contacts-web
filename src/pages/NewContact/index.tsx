// @ts-expect-error TS(6142): Module '../../components/ContactForm' was resolved... Remove this comment to see the full error message
import ContactForm from '../../components/ContactForm';
// @ts-expect-error TS(6142): Module '../../components/PageHeader' was resolved ... Remove this comment to see the full error message
import PageHeader from '../../components/PageHeader';
// @ts-expect-error TS(6142): Module './useContainer' was resolved to '/home/thi... Remove this comment to see the full error message
import useContainer from './useContainer';

export default function NewContact() {
  const { contactFormRef, handleSubmit } = useContainer();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PageHeader title="Novo contato" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
