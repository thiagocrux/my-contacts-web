import { useEffect, useState, useImperativeHandle } from 'react';

// @ts-expect-error TS(6142): Module '../../hooks/useErrors' was resolved to '/h... Remove this comment to see the full error message
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import isAbortError from '../../utils/isAbortError';

export default function useContainer(onSubmit: any, ref: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories(
          controller.signal
        );
        setCategories(categoriesList);
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();

    return () => {
      controller.abort();
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      fillFormFields: (contact: any) => {
        setName(contact.name ?? '');
        setEmail(contact.email ?? '');
        setPhone(formatPhone(contact.phone) ?? '');
        setCategoryId(contact.category.id ?? '');
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
      },
    }),
    []
  );

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  function handleNameChange(event: any) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event: any) {
    setPhone(formatPhone(event.target.value));
  }

  const isFormValid = name && !errors.length;

  async function handleSubmit(event: any) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmitting(false);
  }

  return {
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
  };
}
