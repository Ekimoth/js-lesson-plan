import { useCallback, useMemo, useState } from 'react';

// types
import { SlideObject } from '../types';

const useSlideSwitch = (slides: SlideObject[]) => {
  const [index, setIndex] = useState(0);

  const [hasPrev, hasNext] = useMemo(() => [index > 0, index < slides.length - 1], [index]);

  const currentSlide = useMemo(() => slides[index], [index]);

  const slideList = useMemo(() => slides.slice(0, index + 1), [index]);

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
