import { forwardRef, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

// components
import InnerSlide, { InnerSlideOrientation } from 'components/InnerSlide';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';
import useProgress from 'hooks/useProgress';

const Content = styled.div`
  position: relative;
  height: 100%;
`;

export interface RefProps {
  gotoPrev: () => boolean;
  gotoNext: () => boolean;
}

interface Props {
  slides: SlideObject[];
}

const Slide = forwardRef<RefProps, Props>(({ slides }, ref) => {
  const [{ progress: { lastVisited: [, savedSlidePage] } }, { setSlide }] = useProgress();
  const { currentSlide, childRef } = useSlides(slides, ref, savedSlidePage);

  useLayoutEffect(() => {
    const slideNum = slides.findIndex((slide) => slide === currentSlide);
    setSlide(slideNum);
  }, [slides, currentSlide, setSlide]);

  return (
    <Content>
      {slides.map((slide, i) => (
        <InnerSlide
          key={i}
          slide={slide}
          orientation={InnerSlideOrientation.ROW}
          fullScreen
          {...(slide === currentSlide ? { ref: childRef } : {})}
          isHidden={slide !== currentSlide}
          isInFocus={slide === currentSlide}
        />
      ))}
    </Content>
  );
});

export default Slide;
