import { useEffect, createRef, useRef, useState, useCallback } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([]);
  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleAnimationEnd = useCallback((itemId: any) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();
    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);
    // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
    setItems((prevState) => prevState.filter((item) => item.id !== itemId));

    setPendingRemovalItemsIds((prevState) =>
      prevState.filter((id) => id !== itemId),
    );
  }, []);

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasListener = animationEndListeners.current.has(itemId);

      if (animatedRef?.current && !alreadyHasListener) {
        const onAnimationEnd = () => {
          handleAnimationEnd(itemId);
        };

        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [handleAnimationEnd, pendingRemovalItemsIds]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const handleRemoveItem = useCallback((id: any) => {
    // @ts-expect-error TS(2345): Argument of type '(prevState: never[]) => any[]' i... Remove this comment to see the full error message
    setPendingRemovalItemsIds((prevState) => [...prevState, id]);
  }, []);

  const getAnimatedRef = useCallback((itemId: any) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem: any) => items.map((item) => {
      // @ts-expect-error TS(2345): Argument of type 'any' is not assignable to parame... Remove this comment to see the full error message
      const isLeaving = pendingRemovalItemsIds.includes(item.id);
      // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, {
        isLeaving,
        animatedRef,
      });
    }),
    [pendingRemovalItemsIds, items, getAnimatedRef],
  );

  return {
    items,
    setItems,
    handleRemoveItem,
    renderList,
  };
}
