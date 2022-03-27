import { FC, useCallback } from 'react';
import styled from 'styled-components';

// payload
import { TopicObject } from 'payload';

const TopicNumber = styled.span`
  position: absolute;
  top: 0;
  right: 0.25em;
  color: gray;
  font-size: 3em;
  user-select: none;
`;

const Group = styled.span`
  color: gray;
  font-size: 1em;
  text-align: center;
`;

interface TitleProps {
  isDisabled: boolean;
}

const Title = styled.span<TitleProps>`
  ${({ isDisabled }) => `
    font-size: 1.5em;
    text-align: center;
    color: ${isDisabled ? 'gray' : '#2784a3'};
  `}
`;

interface BoxProps {
  isDisabled: boolean;
}

const Box = styled.div<BoxProps>`
  ${({ isDisabled }) => `
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: black;
    color: gray;
    border: 2px solid gray;
    border-radius: 10px;
    transition: background-color 0.5s, transform 0.5s;
    user-select: none;

    ${isDisabled ? '' : `
      :hover {
        background-color: #131516;
        cursor: pointer;
        transform: scale(1.03);
      }
    `}
  `}
`;

const MarkedAsNew = styled.span`
  position: absolute;
  bottom: 0.3em;
  right: 0.5em;
  color: #a71414;
  font-size: 2em;
`;

const MarkedAsNotAvailable = styled.span`
  position: absolute;
  bottom: 0.3em;
  right: 0.2em;
  color: gray;
  font-size: 2em;
`;

interface Props {
  topic: TopicObject;
  onSelect: (topic: TopicObject) => void;
  isNew: boolean;
}

const TopicCard: FC<Props> = ({ topic, topic: { id, title, group, isPlaceholder = false }, onSelect, isNew }) => {
  const onClick = useCallback(() => {
    if (isPlaceholder) {
      return;
    }

    onSelect(topic);
  }, [topic, onSelect, isPlaceholder]);

  return (
    <Box onClick={onClick} isDisabled={isPlaceholder}>
      {isNew && !isPlaceholder ? <MarkedAsNew title="New topic added since your last visit">New</MarkedAsNew> : null}
      {isPlaceholder ? <MarkedAsNotAvailable title="Not available yet">🚫</MarkedAsNotAvailable> : null}
      {id ? <TopicNumber>{id}</TopicNumber> : null}
      {group ? <Group>{group}</Group> : null}
      <Title isDisabled={isPlaceholder}>{title}</Title>
    </Box>
  );
};

export default TopicCard;