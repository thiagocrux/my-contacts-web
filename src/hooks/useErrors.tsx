import { useState, useCallback } from 'react';

type Error = {
  field: string;
  message: string;
};

export default function useErrors() {
  const [errors, setErrors] = useState<Error[]>([]);

  const setError = useCallback(
    ({ field, message }: Error) => {
      const errorAlreadyExists = errors.find(
        (error) => error.field === 'email'
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName: string) =>
      errors.find((error) => error.field === fieldName)?.message,
    [errors]
  );

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
