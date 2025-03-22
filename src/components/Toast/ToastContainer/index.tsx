import { useEffect } from 'react';

import { useAnimatedList } from '../../../hooks';
import { Toast } from '../../../types';
import { toastEventManager } from '../../../utils';
import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }: Omit<Toast, 'id'>) {
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
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          animatedRef={animatedRef}
          isLeaving={isLeaving}
          onRemoveMessage={handleRemoveItem}
        />
      ))}
    </Container>
  );
}
