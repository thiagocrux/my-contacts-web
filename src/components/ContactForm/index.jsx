import PropTypes from 'prop-types';

import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import useContainer from './useContainer';

import { ButtonContainer, Form } from './styles';

export default function ContactForm({ buttonLabel, onSubmit, ref }) {
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
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          placeholder="Nome*"
          error={getErrorMessageByFieldName('name')}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          error={getErrorMessageByFieldName('email')}
          onChange={handleEmailChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          value={phone}
          placeholder="Telefone"
          maxLength={15}
          onChange={handlePhoneChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
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
