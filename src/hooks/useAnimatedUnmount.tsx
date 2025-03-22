import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(isComponentVisible: any) {
  const [shouldRender, setShouldRender] = useState(isComponentVisible);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (isComponentVisible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;

    if (!isComponentVisible && elementRef) {
      // @ts-expect-error TS(2339): Property 'addEventListener' does not exist on type... Remove this comment to see the full error message
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        // @ts-expect-error TS(2339): Property 'removeEventListener' does not exist on t... Remove this comment to see the full error message
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isComponentVisible]);

  return { shouldRender, animatedElementRef };
}
