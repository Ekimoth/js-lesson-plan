import { forwardRef } from 'react';
import styled from 'styled-components';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

// components
import Code from 'components/Code';
import Header from './Header';

// types
import { RefProps } from '../Slide';

interface TopContainerProps {
  fullScreen: boolean;
  noContent: boolean;
}

const TopContainer = styled.div<TopContainerProps>`
  ${({ fullScreen, noContent }) => `
    display: grid;
    grid-template-rows: ${noContent ? '' : 'auto'} 1fr;
    min-height: 1em;
    min-width: 1em;
    // border: 2px solid white;
    position: relative;

    ${fullScreen ?
      `
        width: 100%;
        height: 100%;
      ` : ''
    }

    flex-grow: .00001;
    flex-shrink: .00001;
    transition: all 0.5s;
  `}
`;

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
    align-items: center; // ${orientation === InnerSlideOrientation.COLUMN ? 'stretch' : 'center'};
    flex-wrap: wrap;
    
    flex-direction: ${orientation};
    min-width: 27em;
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
  isHidden?: boolean
}

const InnerSlide = forwardRef<RefProps, Props>((
  {
    slide: {
      headers,
      innerSlides,
      codeSnippet = '',
    },
    orientation,
    fullScreen = false,
    isHidden = false
  },
  ref
) => {
  const { currentSlide, slideList, childRef } = useSlides(innerSlides || [], ref);

  const noContent = !slideList?.length && !codeSnippet;

  if (isHidden) {
    return null;
  }

  return (
    <TopContainer fullScreen={fullScreen} noContent={noContent}>
      <Header headers={headers} />
      {!noContent && (
        <Content orientation={orientation}>
          {slideList.map((innerSlide, i) => (
            <InnerSlide
              key={i}
              slide={innerSlide}
              orientation={invertOrientation(orientation)}
              {...(innerSlide === currentSlide ? { ref: childRef } : {})}
            />
          ))}
          <Code>{codeSnippet}</Code>
        </Content>
      )}
    </TopContainer>
  );
});

export default InnerSlide;
