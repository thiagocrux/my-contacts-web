import { useEffect } from 'react';

import { ToastMessage } from '../../../components';
import { useAnimatedList } from '../../../hooks';
import { Message } from '../../../types';
import { toastEventManager } from '../../../utils';

import { Container } from './styles';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem: handleMessageRemoval,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }: Omit<Message, 'id'>) {
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
          onMessageRemoval={handleMessageRemoval}
        />
      ))}
    </Container>
  );
}
