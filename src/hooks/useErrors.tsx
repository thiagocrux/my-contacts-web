import { useState, useCallback } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(
    ({
      field,
      message
    }: any) => {
      const errorAlreadyExists = errors.find(
        // @ts-expect-error TS(2339): Property 'field' does not exist on type 'never'.
        (error) => error.field === 'email',
      );

      if (errorAlreadyExists) {
        return;
      }

      // @ts-expect-error TS(2345): Argument of type '(prevState: never[]) => { field:... Remove this comment to see the full error message
      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors],
  );

  const removeError = useCallback((fieldName: any) => {
    setErrors((prevState) =>
      // @ts-expect-error TS(2339): Property 'field' does not exist on type 'never'.
      prevState.filter((error) => error.field !== fieldName),
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    // @ts-expect-error TS(2339): Property 'field' does not exist on type 'never'.
    (fieldName: any) => errors.find((error) => error.field === fieldName)?.message,
    [errors],
  );

  return { errors, setError, removeError, getErrorMessageByFieldName };
}
