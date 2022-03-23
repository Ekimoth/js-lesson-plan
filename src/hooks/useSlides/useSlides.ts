import { useImperativeHandle, useRef, ForwardedRef, useMemo } from 'react';

// hooks
import useSlide from './innerHooks/useSlideSwitch';

// types
import { SlideObject } from './types';

export interface RefProps {
  gotoPrev: () => boolean;
  gotoNext: () => boolean;
}

const useSlides = (slides: SlideObject[], selfRef: ForwardedRef<RefProps>) => {
  const [{ currentSlide, slideList }, { gotoPrev, gotoNext }] = useSlide(slides);

  const childRef = useRef<RefProps>(null);

  useImperativeHandle(selfRef, () => ({
    gotoPrev: () => {
      const { current: child } = childRef;

      if (child?.gotoPrev()) {
        return true;
      }

      return gotoPrev();
    },
    gotoNext: () => {
      const { current: child } = childRef;

      if (child?.gotoNext()) {
        return true;
      }

      return gotoNext();
    },
  }), [gotoPrev, gotoNext]);

  return useMemo(() => ({ currentSlide, slideList, childRef }), [currentSlide, slideList, childRef]);
};

export default useSlides;
