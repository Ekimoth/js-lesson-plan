import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

// components
import Slide, { RefProps } from 'components/Slide/Slide';
import KeyboardListeners from 'components/KeyboardListeners';

// payload
import slides from 'payload';

interface ButtonProps {
  float: 'left' | 'right';
}

const Button = styled.button<ButtonProps>`
  ${({ float }) => `
    position: fixed;
    ${float}: 0;
    top: 50%;
    font-size: 2em;
    background-color: black;
    border: none;
    color: white;
    display: flex;
    padding: 0.3em;
    cursor: pointer;

    :active {
      background-color: #181717;
    }

    opacity: 0;

    :hover {
      opacity: 1;
    }

    transition: opacity 0.3s;
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
    <Div>
      <BlurredBackground />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Slide ref={slideRef} slides={slides} />
      </div>
      <Button float="left" onClick={onPrev}><IoIosArrowBack /></Button>
      <Button float="right" onClick={onNext}><IoIosArrowForward /></Button>
      <KeyboardListeners onLeft={onPrev} onRight={onNext} />
    </Div>
  )
};

export default App
