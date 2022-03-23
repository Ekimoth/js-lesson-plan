import { ElementType, forwardRef } from 'react';
import styled from 'styled-components';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

// types
import { RefProps } from '../Slide';

interface TopContainerProps {
  fullScreen: boolean;
}

const TopContainer = styled.div<TopContainerProps>`
  ${({ fullScreen }) => `
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 1em;
    min-width: 1em;
    border: 1px solid black;
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

const Headers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em 0;
  color: white;

  ${[1, 2, 3, 4, 5, 6].map((n) => `
    h${n} {
      margin: 0;
      font-size: ${6.5 - n}em;
      text-shadow: 5px 5px 8px #000;
    }
  `)}
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
    align-items: ${orientation === InnerSlideOrientation.COLUMN ? 'stretch' : 'center'};
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
  startHeadingFrom: number;
}

const InnerSlide = forwardRef<RefProps, Props>((
  {
    slide: {
      headers = [],
      innerSlides = [],
    },
    orientation,
    fullScreen = false,
    startHeadingFrom,
  },
  ref
) => {
  const { currentSlide, slideList, childRef } = useSlides(innerSlides, ref);

  return (
    <TopContainer className="inner-slide top-container" fullScreen={fullScreen}>
      <div>
        {headers.length ? (
          <Headers className="inner-slide headers">
            {headers.map((header, i) => {
              if (!header) {
                return null;
              }

              const Tag = `h${startHeadingFrom + i}` as ElementType;
              return <Tag key={i}>{header}</Tag>;
            })}
          </Headers>
        ) : null}
      </div>
      <div>
        <Content className="inner-slide content" orientation={orientation}>
          {slideList.length ? slideList.map((innerSlide, i) => (
            <InnerSlide
              key={i}
              slide={innerSlide}
              orientation={invertOrientation(orientation)}
              startHeadingFrom={startHeadingFrom + 1}
              {...(innerSlide === currentSlide ? { ref: childRef } : {})}
            />
          )) : <div></div>}
        </Content>
      </div>
    </TopContainer>
  );
});

export default InnerSlide;
