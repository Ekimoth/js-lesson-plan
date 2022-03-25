import { useCallback, useMemo, useState } from 'react';

// types
import { SlideObject } from '../types';

const useSlideSwitch = (slides: SlideObject[], initialIndex = 0) => {
  const [index, setIndex] = useState(initialIndex);

  const [hasPrev, hasNext] = useMemo(() => [index > 0, index < slides.length - 1], [slides, index]);

  const currentSlide = useMemo(() => slides[index], [slides, index]);

  const slideList = useMemo(() => slides.slice(0, index + 1), [slides, index]);

  const gotoNext = useCallback(() => {
    if (hasNext) {
      setIndex((i) => i + 1);
      return true;
    }

    return false;
  }, [hasNext]);

  const gotoPrev = useCallback(() => {
    if (hasPrev) {
      setIndex((i) => i - 1);
      return true;
    }
    
    return false;
  }, [hasPrev]);

  return useMemo(() => 
    [{ currentSlide, slideList, key: index }, { gotoNext, gotoPrev }] as const,
    [currentSlide, slideList, index, gotoNext, gotoPrev]
  );
};

export default useSlideSwitch;
