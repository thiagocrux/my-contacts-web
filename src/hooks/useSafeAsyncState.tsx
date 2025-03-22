import { useState, useCallback } from 'react';

import useIsMounted from './useIsMounted';

/**
 * A custom React hook for safely managing state updates in asynchronous operations.
 * Returns a stateful value and a memoized state setter that only updates if the component is mounted.
 *
 * @param {*} initialState The initial state value to use
 * @returns {[*, SetSafeAsyncState]} An array containing:
 * - The current state value
 * - The safe state setter function (will only update state if component is mounted)
 *
 * @example
 * const [data, setData] = useSafeAsyncAction(null);
 *
 * useEffect(() => {
 *   fetchData().then((result) => {
 *     setData(result); // Only updates state if component is mounted
 *   });
 * }, []);
 */
export default function useSafeAsyncState(initialState: unknown) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  const setSafeAsyncState = useCallback(
    (data: unknown) => {
      if (isMounted()) {
        setState(data);
      }
    },
    [isMounted]
  );

  return [state, setSafeAsyncState];
}
