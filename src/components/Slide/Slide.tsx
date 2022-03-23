import { forwardRef } from 'react';
import styled from 'styled-components';

// components
import InnerSlide, { InnerSlideOrientation } from 'components/InnerSlide';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

interface ContainerProps {
  backgroundColor?: string;
}

const Content = styled.div<ContainerProps>`
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor || 'black'};
    position: relative;
    padding: 2em;
    height: 100%;
  `}
`;

export interface RefProps {
  gotoPrev: () => boolean;
  gotoNext: () => boolean;
}

interface Props {
  backgroundColor?: string;
  slides: SlideObject[];
}

const Slide = forwardRef<RefProps, Props>(({ backgroundColor, slides }, ref) => {
  const { currentSlide, childRef } = useSlides(slides, ref);

  return (
    <Content className="slide" backgroundColor={backgroundColor}>
      <InnerSlide key={currentSlide.backgroundColor} ref={childRef} slide={currentSlide} orientation={InnerSlideOrientation.ROW} fullScreen />
    </Content>
  );
});

export default Slide;
