import { TopicObject } from './index';

const theNull: TopicObject = {
  id: 6,
  title: 'Null',
  group: 'Primitive Data Types',
  slides: [
    {
      headers: {
        h1: 'null',
        h2: 'The "non-value" object',
      },
      innerSlides: [
        {
          innerSlides: [
            {},
            {
              text: "Null indicates absence of value of any type...",
            },
            {
              text: "...but it's also an indication of a reserved placeholder (i.e. variable) for a possible value in the future",
            },
          ],
        },
      ]
    },
    {
      headers: {
        h2: 'Exercise time',
      },
    },
    {
      headers: {
        h2: 'Exercise time',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: '1. Excercise text',
            },
            {
              headers: {
                h4: 'The solution',
              },
              codeSnippet: 'var vvv = "ddd";',
            },
          ],
        },
      ]
    },
    {
      headers: {
        h1: 'Congratulations!',
        h3: 'You completed the course on',
        h2: '   ',
        h4: 'JavaScript Data Types • Primitive Data Types • null',
      },
    },
  ],
};

export default theNull;

