import { forwardRef } from 'react';
import styled from 'styled-components';

// components
import InnerSlide, { InnerSlideOrientation } from 'components/InnerSlide';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

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
  const { currentSlide, childRef, key } = useSlides(slides, ref);

  return (
    <Content>
      <InnerSlide
        key={key}
        ref={childRef}
        slide={currentSlide}
        orientation={InnerSlideOrientation.ROW}
        fullScreen
      />
    </Content>
  );
});

export default Slide;
