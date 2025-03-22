import { useEffect } from 'react';

import { toastEventManager } from '../../../utils/toast';
// @ts-expect-error TS(6142): Module '../ToastMessage' was resolved to '/home/th... Remove this comment to see the full error message
import ToastMessage from '../ToastMessage';

import { Container } from './styles';
// @ts-expect-error TS(6142): Module '../../../hooks/useAnimatedList' was resolv... Remove this comment to see the full error message
import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({
      type,
      text,
      duration
    }: any) {
      // @ts-expect-error TS(2345): Argument of type '(prevState: never[]) => { id: nu... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      {renderList((message: any, {
        isLeaving,
        animatedRef
      }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
