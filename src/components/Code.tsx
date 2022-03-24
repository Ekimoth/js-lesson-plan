import { FC } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

// @ts-ignore
import anOldHope from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope';

const CodeContainer = styled.div`
  font-size: 2em;
`;

interface Props {
  children: string;
}

const Code: FC<Props> = ({ children: codeSnippet }) => {
  if (!codeSnippet) {
    return null;
  }

  return (
    <CodeContainer>
      <SyntaxHighlighter language="javascript" style={anOldHope}>{codeSnippet}</SyntaxHighlighter>
    </CodeContainer>
  );
};


export default Code;
