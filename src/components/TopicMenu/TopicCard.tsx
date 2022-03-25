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

const Title = styled.span`
  color: maroon;
  font-size: 1.5em;
  text-align: center;
  color: #2784a3;
`;

const Box = styled.div`
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

  :hover {
    background-color: #131516;
    cursor: pointer;
    transform: scale(1.03);
  }
`;

interface Props {
  topic: TopicObject;
  onSelect: (topic: TopicObject) => void;
}

const TopicCard: FC<Props> = ({ topic, topic: { id, title, group }, onSelect }) => {
  const onClick = useCallback(() => {
    onSelect(topic);
  }, [topic, onSelect]);

  return (
    <Box onClick={onClick}>
      {id ? <TopicNumber>{id}</TopicNumber> : null}
      {group ? <Group>{group}</Group> : null}
      <Title>{title}</Title>
    </Box>
  );
};

export default TopicCard;