import { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';

// hooks
import useSlide, { SlideObject } from 'components/Slide/useSlide';

// types
import { RefProps } from '../Slide';
import useInnerSlide from './useInnerSlide';

export enum InnerSlideOrientation {
  COLUMNS = 'columns',
  ROWS = 'rows',
}

interface ContainerProps {
  backgroundColor: string;
  orientation: InnerSlideOrientation;
  count: number;
}

const Container = styled.div<ContainerProps>`
  ${({ backgroundColor, orientation, count }) => `
    background-color: ${backgroundColor || 'black'};
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2em;
    display: grid;
    grid-template-${orientation}: repeat(${count}, 1fr);
  `}
`;

const invertOrientation = (orientation: InnerSlideOrientation): InnerSlideOrientation => {
  if (orientation === InnerSlideOrientation.COLUMNS) {
    return InnerSlideOrientation.ROWS;
  }

  return InnerSlideOrientation.COLUMNS;
};

interface Props {
  slide: SlideObject;
  orientation: InnerSlideOrientation;
}

const InnerSlide = forwardRef<RefProps, Props>(({ slide: { backgroundColor, innerSlides }, orientation }, ref) => {
  console.log('vvvv innerSlides', innerSlides);
  const [{ slideList, currentSlide }, { gotoPrev, gotoNext }] = useInnerSlide(innerSlides);

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
    <Container backgroundColor={backgroundColor} orientation={orientation} count={slideList?.length || 1}>
      {slideList?.map((innerSlide, i) => (
        <InnerSlide
          key={i}
          slide={innerSlide}
          orientation={invertOrientation(orientation)}
          {...(innerSlide === currentSlide ? { ref: childRef } : {})}
        />
      ))}
    </Container>
  );
});

export default InnerSlide;
