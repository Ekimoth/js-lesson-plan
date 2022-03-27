import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

// payload
import payload, { TopicObject } from 'payload';

// images
import backgroundImage from 'img/Schemytrio.jpg';

// components
import TopicCard from './TopicCard';
import Topic from 'components/Topic';
import useProgress from 'hooks/useProgress';

const TopContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1c2124;
`;

const BlurredBackground = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Grid = styled.div`
  display: grid;
  padding: 2em;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-auto-rows: minmax(15em, 1fr);
  gap: 1em;
`;

const TopicMenu: FC = () => {
  const [{ currentTopic, progress: { knownTopics } }, { setTopic }] = useProgress();

  const goHome = useCallback(() => {
    setTopic(null);
  }, [setTopic]);

  return (
    <TopContainer>
      <BlurredBackground />
      {!currentTopic ? (
        <Grid>
          {payload.map((topic) => (
            <TopicCard key={topic.id} topic={topic} onSelect={setTopic} isNew={!knownTopics.includes(topic.id)} />
          ))}
        </Grid>
      ) : <Topic topicSlides={currentTopic.slides} goHome={goHome} />}
    </TopContainer>
  );
};

export default TopicMenu;
