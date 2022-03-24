import { SlideObject } from 'hooks/useSlides';

const undefinedAndNull: SlideObject[] = [
  {
    headers: {
      h1: 'Data Types',
      h2: 'Primitive Data Types',
      h3: 'undefined',
    },
    innerSlides: [
      {
        innerSlides: [
          {},
          {
            text: 'The primitive "non-type" type',
          },
          {
            text: '...or value...',
          },
          {
            text: '...or whatever.',
          },
          {
            text: 'Or both! An "undefined" value of the "undefined" type.',
          },
        ],
      },
    ]
  },
  {
    headers: {
      h2: 'undefined',
      h3: 'It indicates absence of value of any type',
    },
    innerSlides: [
      {
        innerSlides: [
          {},
          {
            headers: {
              h4: 'The typeof keyword',
              h5: "One of the ways to check a variable's data type",
            },
          },
          {
            codeSnippet: `var uselessVar;
console.log(typeof uselessVar); // undefined`,
          },
          {
            headers: {
              h5: '...Or safely check if there is a variable with that name at all',
            },
            codeSnippet: 'console.log(typeof notSureIfVarWithThisNameExists); // undefined',
          },
          {
            headers: {
              h5: 'typeof returns a string',
            },
            codeSnippet: "console.log(typeof notSureIfVarWithThisNameExists === 'undefined'); // true",
          },
        ],
      },
    ],
  },
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
      h4: 'JavaScript Data Types • Primitive Data Types • undefined and null',
    },
  },
];

export default undefinedAndNull;

