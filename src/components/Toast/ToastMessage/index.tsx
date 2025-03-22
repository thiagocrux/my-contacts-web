import { useEffect, memo, Ref } from 'react';

import { xCircle, checkCircle } from '../../../assets';
import { Toast } from '../../../types';

import { Container } from './styles';

type Props = {
  message: Toast;
  isLeaving: boolean;
  onRemoveMessage: (id: number) => void;
  animatedRef: Ref<HTMLDivElement>;
};

function ToastMessage({
  message,
  isLeaving,
  onRemoveMessage,
  animatedRef,
}: Props) {
  useEffect(() => {
    const timeoutId = setTimeout(
      () => onRemoveMessage(message.id),
      message.duration
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      ref={animatedRef}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      $type={message.type}
      $isLeaving={isLeaving}
    >
      {message.type === 'danger' && <img src={xCircle} alt="X" />}
      {message.type === 'success' && <img src={checkCircle} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

export default memo(ToastMessage);
