import { TopicObject } from './index';

const conditionalsIfElse: TopicObject = {
  id: 9,
  title: 'The "else" condition',
  group: 'Conditional Statements',
  slides: [
    {
      headers: {
        h1: 'Conditional Statements',
        h4: 'Statements that express a condition under which certain piece code gets run',
      },
    },
    {
      headers: {
        h1: 'Conditional Statements',
        h3: 'The "else" keyword',
      },
      innerSlides: [
        {
          headers: {
            h4: 'How it looks in code',
          },
          codeSnippet: `if (condition) {
  // a code that ONLY gets run if the {condition} is true   
} else {
  // a code that gets run if the {condition} is NOT true
}`
        },
      ],
    },
    {
      headers: {
        h3: '"else" is just the opposite of the condition inside the "if"'
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (isNight) {
  console.log('Good night. Sweet dreams.');
}

if (!isNight) {
  console.log('It is still early.');
}`,
        },
        {
          headers: {
            h4: 'Do this',
          },
          codeSnippet: `if (isNight) {
  console.log('Good night. Sweet dreams.');
} else {
  console.log('It is still early.');
}`,
        },
      ],
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
        h4: 'JavaScript • Conditional Statements • The "else" condition',
      },
    },
  ],
};

export default conditionalsIfElse;