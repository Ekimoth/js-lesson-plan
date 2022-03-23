import { forwardRef } from 'react';
import styled from 'styled-components';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

// types
import { RefProps } from '../Slide';

interface TopContainerProps {
  backgroundColor: string;
  fullScreen: boolean;
}

const TopContainer = styled.div<TopContainerProps>`
  ${({ backgroundColor, fullScreen }) => `
    display: block;
    grid-template-rows: auto 1fr;
    padding: 1em;
    background-color: ${backgroundColor};
    position: relative;

    ${fullScreen ?
      `
        width: 100%;
        height: 100%;
      ` : ''
    }
  `}
`;

const Headers = styled.div``;

export enum InnerSlideOrientation {
  COLUMN = 'column',
  ROW = 'row',
}

interface ContentContainerProps {
  orientation: InnerSlideOrientation;
}

const Content = styled.div<ContentContainerProps>`
  ${({ orientation }) => `
    display: flex;
    position: relative;
    height: 100%;

    justify-content: space-evenly;
    align-items: ${orientation === InnerSlideOrientation.COLUMN ? 'stretch' : 'center'};
    flex-wrap: wrap;
    
    flex-direction: ${orientation};
    border: 1px solid black;
    min-width: 350px;
  `}
`;

const invertOrientation = (orientation: InnerSlideOrientation): InnerSlideOrientation => {
  if (orientation === InnerSlideOrientation.COLUMN) {
    return InnerSlideOrientation.ROW;
  }

  return InnerSlideOrientation.COLUMN;
};

interface Props {
  slide: SlideObject;
  orientation: InnerSlideOrientation;
  fullScreen?: boolean;
}

const InnerSlide = forwardRef<RefProps, Props>(({ slide: { backgroundColor, innerSlides = [] }, orientation, fullScreen = false }, ref) => {
  const { currentSlide, slideList, childRef } = useSlides(innerSlides, ref);

  console.log('vvvv slideList', slideList);

  return (
    <TopContainer className="inner-slide top-container" backgroundColor={backgroundColor} fullScreen={fullScreen}>
      <Headers className="inner-slide headers" />
      <Content className="inner-slide content" orientation={orientation}>
        {slideList.length ? slideList.map((innerSlide, i) => (
          <InnerSlide
            key={i}
            slide={innerSlide}
            orientation={invertOrientation(orientation)}
            {...(innerSlide === currentSlide ? { ref: childRef } : {})}
          />
        )) : <div>vvvvvvvvvv</div>}
      </Content>
    </TopContainer>
  );
});

export default InnerSlide;
