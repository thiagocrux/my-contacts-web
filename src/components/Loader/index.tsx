import { ReactPortal, Spinner } from '../../components';
import { useAnimatedUnmount } from '../../hooks';

import { Overlay } from './styles';

type Props = {
  isLoading: boolean;
};

export default function Loader({ isLoading }: Props) {
  const { animatedElementRef, shouldRender } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={animatedElementRef} $isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
