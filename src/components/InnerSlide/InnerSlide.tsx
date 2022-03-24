import { ElementType, forwardRef } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

// @ts-ignore
import anOldHope from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope';

// hooks
import useSlides, { SlideObject } from 'hooks/useSlides';

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

const Headers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2em 0;
  color: white;
  height: 100%;

  ${[1, 2, 3, 4, 5, 6].map((n) => `
    h${n} {
      margin: 0;
      font-size: ${6.5 - n}em;
      text-shadow: 5px 5px 8px #000;
      text-align: center;
    }
  `)}
`;

const CodeContainer = styled.div`
  font-size: 2em;
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
      innerSlides,
      content,
    },
    orientation,
    fullScreen = false,
    startHeadingFrom,
  },
  ref
) => {
  const { currentSlide, slideList, childRef } = useSlides(innerSlides || [], ref);

  const noContent = !slideList?.length && !content;

  return (
    <TopContainer className="inner-slide top-container" fullScreen={fullScreen} noContent={noContent}>
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
      {noContent ? null :
        (
          <div>
            <Content className="inner-slide content" orientation={orientation}>
              {slideList.length
                ? slideList.map((innerSlide, i) => (
                  <InnerSlide
                    key={i}
                    slide={innerSlide}
                    orientation={invertOrientation(orientation)}
                    startHeadingFrom={startHeadingFrom + 2}
                    {...(innerSlide === currentSlide ? { ref: childRef } : {})}
                  />
                ))
                : content ? (
                  <CodeContainer>
                    <SyntaxHighlighter language="javascript" style={anOldHope}>{content}</SyntaxHighlighter>
                  </CodeContainer>
                ) : null}
            </Content>
          </div>
        )
      }
    </TopContainer>
  );
});

export default InnerSlide;
