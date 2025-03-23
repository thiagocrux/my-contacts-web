import { useEffect, memo, Ref } from 'react';

import { xCircle, checkCircle } from '../../../assets';
import { Message } from '../../../types';

import { Container } from './styles';

type Props = {
  message: Message;
  isLeaving: boolean;
  onMessageRemoval: (id: number) => void;
  animatedRef: Ref<HTMLDivElement>;
};

function ToastMessage({
  message,
  isLeaving,
  onMessageRemoval,
  animatedRef,
}: Props) {
  useEffect(() => {
    const timeoutId = setTimeout(
      () => onMessageRemoval(message.id),
      message.duration
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onMessageRemoval]);

  function handleToastRemoval() {
    onMessageRemoval(message.id);
  }

  return (
    <Container
      ref={animatedRef}
      onClick={handleToastRemoval}
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
