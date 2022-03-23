import { useImperativeHandle, useRef, forwardRef, ElementType } from 'react';
import styled from 'styled-components';

// components
import InnerSlide, { InnerSlideOrientation } from 'components/InnerSlide';

// hooks
import useSlide, { SlideObject } from 'components/Slide/useSlide';

interface ContainerProps {
  backgroundColor?: string;
}

const Container = styled.div<ContainerProps>`
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor || 'black'};
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2em;
  `}
`;

const Headers = styled.div`
  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
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
  const [{ currentSlide }, { gotoPrev, gotoNext }] = useSlide(slides);

  const childRef = useRef<RefProps>(null);

  useImperativeHandle(ref, () => ({
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

  return (
    <Container backgroundColor={backgroundColor}>
      <InnerSlide ref={childRef} slide={currentSlide} orientation={InnerSlideOrientation.COLUMNS} key={currentSlide.backgroundColor} />
    </Container>
  );
});

export default Slide;
