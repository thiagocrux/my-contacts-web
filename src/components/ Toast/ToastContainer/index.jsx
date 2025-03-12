import { useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';

import { Container } from './styles';
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleAnimationEnd,
    handleItemRemoval,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
          onRemoveMessage={handleItemRemoval}
        />
      ))}
    </Container>
  );
}
