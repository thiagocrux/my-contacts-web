import { useCallback, useEffect, useRef } from 'react';

/**
 * @module useIsMounted
 * @description A custom hook that tracks whether a component is mounted.
 * Returns a memoized function to check the mounted state, helping prevent
 * state updates on unmounted components.
 *
 * @returns {Function} isMounted - A function that returns true if component is mounted, false otherwise
 *
 * @example
 * // Usage in a functional component
 * function MyComponent() {
 *   const isMounted = useIsMounted();
 *
 *   useEffect(() => {
 *     someAsyncOperation().then(() => {
 *       if (isMounted()) {
 *         // Safely update state
 *         setData(data);
 *       }
 *     });
 *   }, []);
 *
 *   return <div>...</div>;
 * }
 */
export default function useIsMounted() {
  // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
  const isMountedRef = useRef();

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const isMounted = useCallback(() => isMountedRef.current, []);
  return isMounted;
}
