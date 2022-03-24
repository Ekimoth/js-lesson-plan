import { FC, ElementType } from 'react';
import styled from 'styled-components';

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
      user-select: none;
    }
  `)}
`;

interface Props {
  headers?: Record<string, string>;
}

const Header: FC<Props> = ({ headers }) => {
  if (!headers) {
    return null;
  }

  return (
    <Headers>
      {Object.entries(headers).map(([tag, content], i) => {
        const Tag = tag as ElementType;
        return <Tag key={i}>{content}</Tag>;
      })}
    </Headers>
  );
};

export default Header;
