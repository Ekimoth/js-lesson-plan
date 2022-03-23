import { useCallback, useMemo, useState, useRef } from 'react';

// export interface SlideObject {
//   info?: string;
//   headers?: string[];
//   slides?: SlideObject[];
//   content?: string;
//   [key: string]: any;
// }

export interface SlideObject {
  backgroundColor: string;
  innerSlides?: SlideObject[];
}

const useSlide = (slides: SlideObject[]) => {
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

  return useMemo(() => [{ currentSlide, slideList }, { gotoNext, gotoPrev }] as const, [currentSlide, slideList, gotoNext, gotoPrev]);
};

export default useSlide;
