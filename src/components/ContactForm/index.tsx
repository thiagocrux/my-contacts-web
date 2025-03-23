import { ChangeEvent, RefObject } from 'react';

import { Button, FormGroup, Input, Select } from '../../components';
import { Category, ContactFormInput, ContactFormRef } from '../../types';
import useContainer from './useContainer';

import { ButtonContainer, Form } from './styles';

type Props = {
  buttonLabel: string;
  onSubmit: (contact: ContactFormInput) => void;
  ref: RefObject<ContactFormRef | null>;
};

export default function ContactForm({ buttonLabel, onSubmit, ref }: Props) {
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
          $error={getErrorMessageByFieldName('name')}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          $error={getErrorMessageByFieldName('email')}
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
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setCategoryId(event.target.value)
          }
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>
          {categories.map((category: Category) => (
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
