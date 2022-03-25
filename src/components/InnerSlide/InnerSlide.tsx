import { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

// components
import Code from 'components/Code';
import Paragraph from 'components/Paragraph';
import Header from './Header';

// types
import { RefProps } from '../Slide';

interface TopContainerProps {
  fullScreen: boolean;
  noContent: boolean;
  isShown: boolean;
  isInFocus: boolean;
}

const TopContainer = styled.div<TopContainerProps>`
  ${({ fullScreen, noContent, isShown, isInFocus }) => `
    opacity: ${isShown ? isInFocus ? '1' : '0.4' : '0'};
    width: ${isShown ? 'unset' : '0'};
    height: ${isShown ? 'unset' : '0'};

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
    transition: opacity 1s, width 1s, height 1s;

    :hover {
      opacity: 1;
    }
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
  isHidden?: boolean;
  isInFocus?: boolean;
}

const InnerSlide = forwardRef<RefProps, Props>((
  {
    slide: {
      headers,
      innerSlides,
      codeSnippet = '',
      text = '',
    },
    orientation,
    fullScreen = false,
    isHidden = false,
    isInFocus = false,
  },
  ref
) => {
  const { currentSlide, slideList, childRef } = useSlides(innerSlides || [], ref);

  const topRef = useRef<HTMLDivElement>(null);

  const [isShown, show] = useState(false);

  useEffect(() => {
    show(true);

    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const noContent = !slideList?.length && !codeSnippet && !text;

  if (isHidden) {
    return null;
  }

  return (
    <TopContainer ref={topRef} fullScreen={fullScreen} noContent={noContent} isShown={isShown} isInFocus={isInFocus}>
      <Header headers={headers} />
      {!noContent && (
        <Content orientation={orientation}>
          {slideList.map((innerSlide, i) => (
            <InnerSlide
              key={i}
              slide={innerSlide}
              orientation={invertOrientation(orientation)}
              isInFocus={innerSlide === currentSlide}
              {...(innerSlide === currentSlide ? { ref: childRef } : {})}
            />
          ))}
          <Paragraph>{text}</Paragraph>
          <Code>{codeSnippet}</Code>
        </Content>
      )}
    </TopContainer>
  );
});

export default InnerSlide;
