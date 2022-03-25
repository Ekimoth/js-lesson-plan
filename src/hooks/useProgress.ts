import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { createStatePiece } from 'react-pieceful-state';

// payload
import payload, { TopicObject } from 'payload';

interface ProgressObject {
  knownTopics: number[];
  lastVisited: number[];
}

interface InnerState {
  currentTopic: TopicObject | null;
  progress: ProgressObject;
}

const STORAGE_KEY = 'js-lessons';

const defaultProgressState: ProgressObject = {
  knownTopics: [],
  lastVisited: [],
};

const useProgressPiece = createStatePiece<InnerState>('progress', { currentTopic: null, progress: defaultProgressState });

const useProgress = () => {
  const [localSave] = useState<ProgressObject>(() => {
    const savedInLocalStorage = localStorage.getItem(STORAGE_KEY);

    try {
      if (savedInLocalStorage) {
        return JSON.parse(savedInLocalStorage) as ProgressObject;
      } else {
        throw Error();
      }
    } catch {
      const knownTopics = payload.map(({ id }) => id);

      return { knownTopics, lastVisited: [] };
    }
  });

  const [initialTopic] = useState<TopicObject | null>(() => {
    const [topicId] = localSave.lastVisited;

    if (!topicId) {
      return null;
    }

    return payload.find(({ id }) => id === topicId) || null;
  });

  const [{ currentTopic, progress }, updateGlobalState] = useProgressPiece({
    currentTopic: initialTopic,
    progress: localSave,
  });

  useLayoutEffect(() => {
    window.addEventListener('beforeunload', () => {
      try {
        const json = JSON.stringify(progress);
        localStorage.setItem(STORAGE_KEY, json);
      } catch {}
    });
  }, [progress]);

  const setTopic = useCallback((topic: TopicObject | null, slide = 0) => {
    updateGlobalState((state) => ({
      ...state,
      currentTopic: topic,
      progress: {
        ...state.progress,
        lastVisited: [topic?.id || 0, slide],
        ...(topic ? { knownTopics: Array.from(new Set([...state.progress.knownTopics, topic.id])) } : {}),
      },
    }));
  }, [updateGlobalState]);

  const setSlide = useCallback((slide: number) => {
    updateGlobalState((state) => ({
      ...state,
      progress: {
        ...state.progress,
        lastVisited: [state.progress.lastVisited[0], slide],
      }
    }));
  }, [updateGlobalState]);

  return useMemo(() => [{ currentTopic, progress }, { setTopic, setSlide }] as const,
    [currentTopic, progress, setTopic, setSlide]
  );
};

export default useProgress;
