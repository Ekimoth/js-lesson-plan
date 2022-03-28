import { TopicObject } from './index';

const conditionalsIf: TopicObject = {
  id: 8,
  title: 'The "if" condition',
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
        h3: 'The "if" keyword',
      },
      innerSlides: [
        {
          headers: {
            h4: 'How it looks in code',
          },
          codeSnippet: `if (condition) {
  // a code that ONLY gets run if the {condition} is true   
}`
        },
      ],
    },
    {
      headers: {
        h3: 'The condition',
      },
      innerSlides: [
        {
          text: "Think of it as a boolean - it's either true or false",
          innerSlides: [
            {
              codeSnippet: `2 + 3 === 5 // true - a boolean
'password123' === 'password456' // false - also a boolean
`,
            },
            {
              codeSnippet: `if (2 + 3 === 5) {
  console.log('This is working! Yay!');
}`
            },
            {
              codeSnippet: `if ('password123' !== 'password456') {
  console.log('This is also working! Yay!');
}`
            },
            {
              headers: {
                h4: "Since it's a boolean, it means it can be stored in a variable",
              },
              codeSnippet: `var myBooleanVar = 2 + 3 === 5;

if (myBooleanVar) {
  console.log('This is working! Yay!');
}`,
            },
            {
              codeSnippet: `var conditionInVar = 'password123' !== 'password456';

if (conditionInVar) {
  console.log('The passwords are not the same.');
}`,
            }
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'The condition',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'Think of it as a boolean expression',
            },
            {
              headers: {
                h4: 'But guess what...',
              },
              text: "Even if it's not a boolean, it will be converted to a boolean",
            },
            {
              text: 'Because even non-boolean expressions can be "truthy"',
            },
            {
              text: '...or "falsy"',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: '"Truthy" and "falsy" expressions',
        h4: 'What is that?',
      },
    },
    {
      headers: {
        h2: '"Truthy" and "falsy" expressions',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'Any non-boolean expression inside an "if" statement gets interpreted as either "truthy" or "falsy"',
            },
            {
              headers: {
                h4: 'Good news',
              },
              text: 'The "falsy" list is short',
            },
            {
              text: '...and definitive.',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: '"Truthy" and "falsy" expressions',
        h3: 'The full lists',
      },
      innerSlides: [
        {
          headers: {
            h4: 'The full "falsy" list',
          },
          text: `- false... obviously!
- 0 (number zero)
- "" (empty string)
- undefined
- null
- NaN`,
        },
        {
          headers: {
            h4: 'The full "truthy" list',
          },
          innerSlides: [
            {
              text: 'Everything else',
            },
            {
              headers: {
                h3: 'Literally!',
              },
            },
            {
              text: 'Seriously. Any other value you can think of is "truthy".',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h3: `Let's take a look at the "falsy" list again
and keep in mind that everything else is "truthy"`,
      },
      innerSlides: [
        {
          text: `- false... obviously!
- 0 (number zero)
- "" (empty string)
- undefined
- null
- NaN`,
        },
        {
          text: 'It means these are unnecessary',
          codeSnippet: `=== true
=== false
=== 0
=== ''
=== undefined
=== null
=== NaN`,
        },
        {
          text: 'Identically, these are unnecessary, too',
          codeSnippet: `!== true
!== false
!== 0
!== ''
!== undefined
!== null
!== NaN`,
        },
      ],
    },
    {
      headers: {
        h3: 'Truthy and falsy shorthands',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (isEvening === true) {
  console.log('Good evening');
}`,
        },
        {
          headers: {
            h4: 'Do this',
          },
          codeSnippet: `if (isEvening) {
  console.log('Good evening');
}`,
        },
      ],
    },
    {
      headers: {
        h3: 'Truthy and falsy shorthands',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (count !== 0) {
  console.log('Good evening');
}`,
        },
        {
          headers: {
            h4: 'Do this',
          },
          codeSnippet: `if (count) {
  console.log('Good evening');
}`,
        },
      ],
    },
    {
      headers: {
        h3: 'Truthy and falsy shorthands',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (password === '') {
  console.log('The password is empty');
}`,
        },
        {
          headers: {
            h4: 'Do this',
          },
          codeSnippet: `if (!password) {
  console.log('The password is empty');
}`,
        },
      ],
    },
    {
      headers: {
        h3: 'Truthy and falsy shorthands',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Instead of this',
          },
          codeSnippet: `if (character === undefined) {
  console.log('No character found');
}`,
        },
        {
          headers: {
            h4: '...or this...',
          },
          codeSnippet: `if (character === null) {
  console.log('No character found');
}`,
        },
        {
          headers: {
            h4: '...do this',
          },
          codeSnippet: `if (!character) {
  console.log('No character found');
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
        h4: 'JavaScript • Conditional Statements • The "if" condition',
      },
    },
  ],
};

export default conditionalsIf;