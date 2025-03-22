// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../Button' was resolved to '/home/thiago/p... Remove this comment to see the full error message
import Button from '../Button';
// @ts-expect-error TS(6142): Module '../FormGroup' was resolved to '/home/thiag... Remove this comment to see the full error message
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
// @ts-expect-error TS(6142): Module './useContainer' was resolved to '/home/thi... Remove this comment to see the full error message
import useContainer from './useContainer';

import { ButtonContainer, Form } from './styles';

export default function ContactForm({
  buttonLabel,
  onSubmit,
  ref
}: any) {
  const {
    name,
    phone,
    categories,
    categoryId,
    email,
    isFormValid,
    isLoadingCategories,
    isSubmitting,
    getErrorMessageByFieldName,
    handleEmailChange,
    handleNameChange,
    handlePhoneChange,
    handleSubmit,
    setCategoryId,
  } = useContainer(onSubmit, ref);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Form onSubmit={handleSubmit} noValidate>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormGroup error={getErrorMessageByFieldName('name')}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Input
          value={name}
          placeholder="Nome*"
          // @ts-expect-error TS(2769): No overload matches this call.
          error={getErrorMessageByFieldName('name')}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormGroup error={getErrorMessageByFieldName('email')}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Input
          value={email}
          type="email"
          placeholder="Email"
          // @ts-expect-error TS(2769): No overload matches this call.
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormGroup>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Input
          value={phone}
          placeholder="Telefone"
          maxLength={15}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormGroup isLoading={isLoadingCategories}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Select
          value={categoryId}
          onChange={(event: any) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option key={category.id} value={category.id}>
              // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ButtonContainer>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  ref: PropTypes.shape().isRequired,
};
