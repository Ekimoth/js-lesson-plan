import { FC } from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: white;
  text-shadow: 5px 5px 8px #000;
  text-align: center;
  user-select: none;
  max-width: 90vw;
  font-size: 2em;
  text-align: justify;
  max-width: 90vw;
  white-space: break-spaces;
`;

interface Props {
  children?: string;
}

const Paragraph: FC<Props> = ({ children: content }) => (
  !content ? null : <P>{content}</P>
);

export default Paragraph;
