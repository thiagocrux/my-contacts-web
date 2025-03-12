import { useState, useCallback } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [idsOfItemsPendingRemoval, setIdsOfItemsPendingRemoval] = useState([]);

  const handleItemRemoval = useCallback((id) => {
    setIdsOfItemsPendingRemoval((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback(
    (id) => {
      setItems((prevState) => prevState.filter((message) => message.id !== id));

      setIdsOfItemsPendingRemoval((prevState) =>
        prevState.filter((messageId) => messageId !== id),
      );
    },
    [setItems],
  );

  const renderList = useCallback(
    (renderItem) =>
      items.map((item) =>
        renderItem(item, {
          isLeaving: idsOfItemsPendingRemoval.includes(item.id),
        }),
      ),
    [idsOfItemsPendingRemoval, items],
  );

  return {
    items,
    setItems,
    handleItemRemoval,
    handleAnimationEnd,
    renderList,
  };
}
