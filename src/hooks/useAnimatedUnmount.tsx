import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(isComponentVisible) {
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
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isComponentVisible]);

  return { shouldRender, animatedElementRef };
}
