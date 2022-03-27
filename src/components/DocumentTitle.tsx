import { FC, useLayoutEffect } from 'react';

interface Props {
  children: string;
}

const DocumentTitle: FC<Props> = ({ children: title }) => {
  useLayoutEffect(() => {
    document.title = title;
  }, []);

  return null;
};

export default DocumentTitle;
