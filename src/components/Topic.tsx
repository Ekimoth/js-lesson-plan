import { FC, useCallback, useRef } from 'react';
import styled from 'styled-components';

// components
import Slide, { RefProps } from 'components/Slide/Slide';
import KeyboardListeners from 'components/KeyboardListeners';

// types
import { SlideObject } from 'hooks/useSlides';
import { TopicObject } from 'payload';

// components
import ControlsLayer from './ControlsLayer';

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 1.6em;
`;

interface Props {
  topic: TopicObject;
  goHome: () => void;
}

const Topic: FC<Props> = ({ topic: { title, slides }, goHome }) => {
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
      <Slide ref={slideRef} title={title} slides={slides} />
      <KeyboardListeners onLeft={onPrev} onRight={onNext} />
      <ControlsLayer onPrev={onPrev} onNext={onNext} onHome={goHome} />
    </Div>
  )
};

export default Topic;
