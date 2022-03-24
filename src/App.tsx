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
    padding: 0.5em;
    transition: opacity 0.3s;
    opacity: 0;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
    
    :active {
      background-color: #181717;
    }
  `}
`;

const Div = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 1.6em;
`;

const BlurredBackground = styled.div`
  background-image: url('/src/img/schemytrio.jpg');
  background-color-alpha: 0.5;
  filter: blur(6px);
  opacity: 0.93;
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
      <Slide ref={slideRef} slides={slides as any} />
      <Button float="left" onClick={onPrev}><IoIosArrowBack /></Button>
      <Button float="right" onClick={onNext}><IoIosArrowForward /></Button>
      <KeyboardListeners onLeft={onPrev} onRight={onNext} />
    </Div>
  )
};

export default App
