import {
  useEffect,
  createRef,
  useRef,
  useState,
  useCallback,
  ReactElement,
  RefObject,
} from 'react';

import { Toast } from '../types';

type RenderItem = (
  item: Toast,
  options: { isLeaving: boolean; animatedRef: RefObject<HTMLDivElement> }
) => ReactElement;

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState<Toast[]>(initialValue);
  const [itemsPendingRemoval, setItemsPendingRemoval] = useState<number[]>([]);
  const animatedRefs = useRef(new Map());
  const animationEndListeners = useRef(new Map());

  const handleAnimationEnd = useCallback((itemId: number) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();
    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);
    setItems((prevState) => prevState.filter((item) => item.id !== itemId));

    setItemsPendingRemoval((prevState) =>
      prevState.filter((id) => id !== itemId)
    );
  }, []);

  useEffect(() => {
    itemsPendingRemoval.forEach((itemId) => {
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
  }, [handleAnimationEnd, itemsPendingRemoval]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const handleRemoveItem = useCallback((id: number) => {
    setItemsPendingRemoval((prevState) => [...prevState, id]);
  }, []);

  const getAnimatedRef = useCallback((itemId: number) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem: RenderItem) =>
      items.map((item) => {
        const isLeaving = itemsPendingRemoval.includes(item.id);
        const animatedRef = getAnimatedRef(item.id);
        return renderItem(item, { isLeaving, animatedRef });
      }),
    [itemsPendingRemoval, items, getAnimatedRef]
  );

  return {
    items,
    setItems,
    handleRemoveItem,
    renderList,
  };
}
