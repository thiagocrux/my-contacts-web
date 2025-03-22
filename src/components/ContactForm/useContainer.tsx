import { useEffect, useState, useImperativeHandle } from 'react';

import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';
import isAbortError from '../../utils/isAbortError';

export default function useContainer(onSubmit, ref) {
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
      fillFormFields: (contact) => {
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

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  const isFormValid = name && !errors.length;

  async function handleSubmit(event) {
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
