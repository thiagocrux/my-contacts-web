// @ts-expect-error TS(6142): Module '../../components/ContactForm' was resolved... Remove this comment to see the full error message
import ContactForm from '../../components/ContactForm';
// @ts-expect-error TS(6142): Module '../../components/Loader' was resolved to '... Remove this comment to see the full error message
import Loader from '../../components/Loader';
// @ts-expect-error TS(6142): Module '../../components/PageHeader' was resolved ... Remove this comment to see the full error message
import PageHeader from '../../components/PageHeader';
// @ts-expect-error TS(6142): Module './useContainer' was resolved to '/home/thi... Remove this comment to see the full error message
import useContainer from './useContainer';

export default function EditContact() {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useContainer();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Loader isLoading={isLoading} />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
