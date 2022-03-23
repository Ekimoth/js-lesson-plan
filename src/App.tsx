import styled from 'styled-components';

// components
import Slide, { RefProps } from 'components/Slide/Slide';

// payload
import slides from 'payload';
import { useCallback, useRef } from 'react';

interface ButtonProps {
  float: 'left' | 'right';
}

const Button = styled.button<ButtonProps>`
  ${({ float }) => `
    position: fixed;
    ${float}: 0;
    top: 50%;
  `}
`;

const Div = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BlurredBackground = styled.div`
  background-image: url('/src/img/schemytrio.jpg');
  background-color-alpha: 0.5;
  filter: blur(12px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function App() {
  const slideRef = useRef<RefProps>(null);

  const onPrev = useCallback(() => {
    const { current: slide } = slideRef;

    if (!slide) {
      return;
    }

    slide.gotoPrev();
  }, []);

  const onNext = useCallback(() => {
    const { current: slide } = slideRef;

    if (!slide) {
      return;
    }

    slide.gotoNext();
  }, []);

  return (
    <>
      <Div>
        <BlurredBackground />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          <Slide ref={slideRef} slides={slides} />
        </div>
      </Div>
      <Button float="left" onClick={onPrev}>{'<'}</Button>
      <Button float="right" onClick={onNext}>{'>'}</Button>
    </>
  )
};

export default App
