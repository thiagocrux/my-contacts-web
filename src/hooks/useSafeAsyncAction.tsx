import { useCallback } from 'react';

import useIsMounted from './useIsMounted';

/**
 * @module useSafeAsyncAction
 * @description A custom hook that provides a safe way to execute asynchronous actions
 * by ensuring the component is still mounted before state updates.
 *
 * @returns {Function} runSafeAsyncAction - A memoized function that safely executes callbacks
 *
 * @example
 * const safeAsyncAction = useSafeAsyncAction();
 *
 * safeAsyncAction(() => {
 *   setState(data);
 * });
 */
export default function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runSafeAsyncAction = useCallback(
    (callback: () => unknown) => {
      if (isMounted()) {
        callback();
      }
    },
    [isMounted]
  );

  return runSafeAsyncAction;
}
