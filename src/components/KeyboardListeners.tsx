import { FC, useLayoutEffect } from 'react';

interface Props {
  onLeft: () => void;
  onRight: () => void;
}

const KeyboardListener: FC<Props> = ({ onLeft, onRight }) => {
  useLayoutEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'Backspace'].includes(e.key)) {
        onLeft();
      } else if (['ArrowRight', ' '].includes(e.key)) {
        onRight();
      }
    };

    document.addEventListener('keyup', listener);

    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, []);

  return null;
};

export default KeyboardListener;
