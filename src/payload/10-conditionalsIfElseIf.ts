import { TopicObject } from './index';

const conditionalsIfElseIf: TopicObject = {
  id: 10,
  title: 'The "else if" condition',
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
        h3: 'The "else if" keyword combination',
      },
      innerSlides: [
        {
          headers: {
            h4: 'How it looks in code',
          },
          codeSnippet: `if (condition) {
  // code that ONLY gets run if the {condition} is true   
} else if (anotherCondition) {
  // code that gets run if {condition} is NOT true and
  // {anotherCondition} is true
}`
        },
      ],
    },
    {
      headers: {
        h3: '"else if" is just a way to check for more than just one condition',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (isNight) {
  console.log('Good night. Sweet dreams.');
} else {
  if (isMorning) {
    console.log('Good morning.');
  } else {
    console.log('Good afternoon');
  }
}`,
        },
        {
          headers: {
            h4: 'Do this',
          },
          codeSnippet: `if (isNight) {
  console.log('Good night. Sweet dreams.');
} else if (isMorning) {
  console.log('Good morning.');
} else {
  console.log('Good afternoon');
}`,
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
      },
    },
    // {
    //   headers: {
    //     h2: 'Exercise time',
    //   },
    //   innerSlides: [
    //     {
    //       innerSlides: [
    //         {
    //           text: '1. Excercise text',
    //         },
    //         {
    //           headers: {
    //             h4: 'The solution',
    //           },
    //           codeSnippet: 'var vvv = "ddd";',
    //         },
    //       ],
    //     },
    //   ]
    // },
    {
      headers: {
        h1: 'Congratulations!',
        h3: 'You completed the course on',
        h2: '   ',
        h4: 'JavaScript • Conditional Statements • The "else if" condition',
      },
    },
  ],
};

export default conditionalsIfElseIf;