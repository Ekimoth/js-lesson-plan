import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  orientation: 'top' | 'right' | 'bottom' | 'left';
}

const Button = styled.button<ButtonProps>`
  ${({ orientation }) => `
    position: relative;
    ${`
      ${orientation}: 0;
      ${['left', 'right'].includes(orientation)
      ? 'top: 50%; transform: translateY(-50%);'
      : 'left: 50%; transform: translateX(-50%);'
    }
    `}
    font-size: 2em;
    background-color: black;
    border: none;
    color: white;
    display: flex;
    padding: 0.5em;
    transition: opacity 0.3s;
    opacity: 0;

    :hover {
      cursor: pointer;
    }
    
    :active {
      background-color: #181717;
    }
  `}
`;

const LeftArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding-right: 3em;

  :hover ${Button} {
    opacity: 1;
  }
`;

const RightArea = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding-left: 3em;

  :hover ${Button} {
    opacity: 1;
  }
`;

const TopArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: 3em;

  :hover ${Button} {
    opacity: 1;
  }
`;

interface Props {
  onPrev: () => void;
  onNext: () => void;
  onHome: () => void;
}

const ControlsLayer: FC<Props> = ({ onPrev, onNext, onHome }) => (
  <>
    <TopArea>
      <Button orientation="top" onClick={onHome}>🏠</Button>
    </TopArea>
    <LeftArea>
      <Button orientation="left" onClick={onPrev}>🡄</Button>
    </LeftArea>
    <RightArea>
      <Button orientation="right" onClick={onNext}>🡆</Button>
    </RightArea>
  </>
);

export default ControlsLayer;
